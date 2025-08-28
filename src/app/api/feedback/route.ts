import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { feedbackFormSchema } from '@/lib/validations/feedback';

// Simple in-memory rate limiting (in production, use Redis or Upstash)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT = {
  maxRequests: 5,
  windowMs: 15 * 60 * 1000, // 15 minutes
};

// Clean up old entries to prevent memory leaks
function cleanupRateLimitMap() {
  const now = Date.now();
  for (const [key, value] of rateLimitMap.entries()) {
    if (now > value.resetTime) {
      rateLimitMap.delete(key);
    }
  }
}

// Clean up every 30 minutes
declare global {
  var rateLimitCleanupInterval: NodeJS.Timeout | undefined;
}

if (typeof global !== 'undefined' && !global.rateLimitCleanupInterval) {
  global.rateLimitCleanupInterval = setInterval(cleanupRateLimitMap, 30 * 60 * 1000);
}

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

// Helper function to add security headers
function addSecurityHeaders(response: NextResponse): NextResponse {
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'DENY');
  response.headers.set('X-XSS-Protection', '1; mode=block');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  return response;
}

export async function POST(req: NextRequest) {
  try {
    if (process.env.NODE_ENV === 'development') {
      console.log('=== Starting feedback submission ===');
    }
    
    // Rate limiting
    const clientIP = getClientIP(req);
    
    if (isRateLimited(clientIP)) {
      console.warn('Rate limit exceeded for IP:', clientIP);
      return addSecurityHeaders(NextResponse.json(
        { error: 'Too many requests. Please try again later.' },
        { status: 429 }
      ));
    }

    const body = await req.json();
    
    // Validate input
    const validationResult = feedbackFormSchema.safeParse(body);
    if (!validationResult.success) {
      console.warn('Validation failed:', validationResult.error.issues);
      return addSecurityHeaders(NextResponse.json(
        { error: 'Invalid input', details: validationResult.error.issues },
        { status: 400 }
      ));
    }

    const { usagePurposes, category, experienceLevel, rating, message } = validationResult.data;
    
    // Detect location
    const location = await detectLocation(req);
    
    // Store in database
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
    
    if (process.env.NODE_ENV === 'development') {
      console.log('Feedback created successfully:', feedback.id);
    }

    return addSecurityHeaders(NextResponse.json(
      { 
        message: 'Feedback submitted successfully!',
        id: feedback.id 
      },
      { 
        status: 201,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'Pragma': 'no-cache',
          'Expires': '0'
        }
      }
    ));
    
  } catch (error) {
    console.error('=== Error submitting feedback ===');
    console.error('Error type:', typeof error);
    console.error('Error message:', error instanceof Error ? error.message : String(error));
    
    if (process.env.NODE_ENV === 'development') {
      console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
      
      if (error instanceof Error) {
        console.error('Error name:', error.name);
        console.error('Error cause:', error.cause);
      }
    }
    
    return addSecurityHeaders(NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    ));
  }
}

// Handle unsupported HTTP methods
export async function GET() {
  return addSecurityHeaders(NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  ));
}

export async function PUT() {
  return addSecurityHeaders(NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  ));
}

export async function DELETE() {
  return addSecurityHeaders(NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405, headers: { Allow: 'POST' } }
  ));
} 