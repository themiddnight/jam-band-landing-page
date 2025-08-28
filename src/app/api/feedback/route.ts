import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { feedbackFormSchema } from '@/lib/validations/feedback';

// Simple in-memory rate limiting (in production, use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000, // 15 minutes
};

function getClientIP(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for');
  const realIP = req.headers.get('x-real-ip');
  const cfConnectingIP = req.headers.get('cf-connecting-ip');
  
  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(',')[0].trim();
  
  return 'unknown';
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    return false;
  }
  
  if (record.count >= RATE_LIMIT.maxRequests) {
    return true;
  }
  
  record.count++;
  return false;
}

async function detectLocation(req: NextRequest) {
  try {
    // Try to get location from Vercel headers first
    const country = req.headers.get('x-vercel-ip-country');
    const city = req.headers.get('x-vercel-ip-city');
    const region = req.headers.get('x-vercel-ip-region');
    
    if (country) {
      return { country, city, region, timezone: null };
    }
    
    // Fallback: Use IP geolocation service
    const ip = getClientIP(req);
    if (ip && ip !== 'unknown') {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 5000); // 5 second timeout
      
      try {
        const response = await fetch(`https://ip-api.com/json/${ip}`, {
          signal: controller.signal,
        });
        clearTimeout(timeoutId);
        
        const data = await response.json();
        
        if (data.status === 'success') {
          return {
            country: data.country,
            city: data.city,
            region: data.regionName,
            timezone: data.timezone,
          };
        }
      } catch (fetchError) {
        clearTimeout(timeoutId);
        console.error('IP geolocation fetch error:', fetchError);
      }
    }
    
    return { country: null, city: null, region: null, timezone: null };
  } catch (error) {
    console.error('Error detecting location:', error);
    return { country: null, city: null, region: null, timezone: null };
  }
}

export async function POST(req: NextRequest) {
  try {
    console.log('=== Starting feedback submission ===');
    
    // Rate limiting
    const clientIP = getClientIP(req);
    console.log('Client IP:', clientIP);
    
    if (isRateLimited(clientIP)) {
      console.log('Rate limited');
      return NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      );
    }

    const body = await req.json();
    console.log('Received feedback data:', body);
    
    // Validate input
    const validationResult = feedbackFormSchema.safeParse(body);
    if (!validationResult.success) {
      console.log('Validation failed:', validationResult.error.issues);
      return NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.issues },
        { status: 400 }
      );
    }

    const { usagePurposes, category, experienceLevel, rating, message } = validationResult.data;
    console.log('Validated data:', { usagePurposes, category, experienceLevel, rating, message });
    
    // Detect location
    console.log('Detecting location...');
    const location = await detectLocation(req);
    console.log('Detected location:', location);
    
    // Store in database
    console.log('Attempting to create feedback in database...');
    console.log('Data to insert:', {
      usagePurposes,
      category,
      experienceLevel,
      rating,
      message: message || '',
      country: location.country,
      city: location.city,
      region: location.region,
      timezone: location.timezone,
      userAgent: req.headers.get('user-agent') || null,
      ipAddress: clientIP,
    });
    
    const feedback = await prisma.feedback.create({
      data: {
        usagePurposes: usagePurposes,
        category,
        experienceLevel,
        rating,
        message: message || '', // Handle optional message field
        country: location.country,
        city: location.city,
        region: location.region,
        timezone: location.timezone,
        userAgent: req.headers.get('user-agent') || null,
        ipAddress: clientIP,
      },
    });
    console.log('Feedback created successfully:', feedback.id);

    return NextResponse.json(
      { 
        message: 'Feedback submitted successfully!',
        id: feedback.id 
      },
      { status: 201 }
    );
    
  } catch (error) {
    console.error('=== Error submitting feedback ===');
    console.error('Error type:', typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error cause:', error.cause);
    }
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
} 