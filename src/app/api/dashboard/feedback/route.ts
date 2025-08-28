import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { Prisma, FeedbackCategory, ExperienceLevel } from '@prisma/client';

// Dashboard endpoint with relaxed CORS for direct HTML file access
export async function GET(req: NextRequest) {
  try {
    // Get query parameters for filtering and pagination
    const searchParams = req.nextUrl.searchParams;
    const page = parseInt(searchParams.get('page') || '1');
    const limit = parseInt(searchParams.get('limit') || '50');
    const category = searchParams.get('category');
    const experienceLevel = searchParams.get('experienceLevel');
    const rating = searchParams.get('rating');
    const country = searchParams.get('country');
    const dateFrom = searchParams.get('dateFrom');
    const dateTo = searchParams.get('dateTo');
    
    // Build where clause for filtering
    const where: Prisma.FeedbackWhereInput = {};
    
    if (category && category !== 'all') {
      where.category = category as FeedbackCategory;
    }
    
    if (experienceLevel && experienceLevel !== 'all') {
      where.experienceLevel = experienceLevel as ExperienceLevel;
    }
    
    if (rating && rating !== 'all') {
      where.rating = parseInt(rating);
    }
    
    if (country && country !== 'all') {
      where.country = country;
    }
    
    if (dateFrom || dateTo) {
      where.createdAt = {};
      if (dateFrom) {
        where.createdAt.gte = new Date(dateFrom);
      }
      if (dateTo) {
        where.createdAt.lte = new Date(dateTo);
      }
    }
    
    // Calculate pagination
    const skip = (page - 1) * limit;
    
    // Get feedback data with pagination
    const [feedback, totalCount] = await Promise.all([
      prisma.feedback.findMany({
        where,
        orderBy: { createdAt: 'desc' },
        skip,
        take: limit,
        select: {
          id: true,
          createdAt: true,
          usagePurposes: true,
          category: true,
          experienceLevel: true,
          rating: true,
          message: true,
          country: true,
          city: true,
          region: true,
          timezone: true,
          userAgent: true,
          ipAddress: true,
        },
      }),
      prisma.feedback.count({ where }),
    ]);
    
    // Get summary statistics
    const stats = await prisma.feedback.groupBy({
      by: ['category', 'experienceLevel', 'rating'],
      _count: true,
    });
    
    // Calculate average rating
    const avgRating = await prisma.feedback.aggregate({
      _avg: { rating: true },
    });
    
    // Get unique countries
    const countries = await prisma.feedback.findMany({
      select: { country: true },
      where: { country: { not: null } },
      distinct: ['country'],
    });
    
    const response = {
      data: feedback,
      pagination: {
        page,
        limit,
        total: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
      stats: {
        totalFeedback: totalCount,
        averageRating: avgRating._avg.rating || 0,
        categoryBreakdown: stats.reduce((acc, stat) => {
          if (!acc[stat.category]) acc[stat.category] = 0;
          acc[stat.category] += stat._count;
          return acc;
        }, {} as Record<string, number>),
        experienceLevelBreakdown: stats.reduce((acc, stat) => {
          if (!acc[stat.experienceLevel]) acc[stat.experienceLevel] = 0;
          acc[stat.experienceLevel] += stat._count;
          return acc;
        }, {} as Record<string, number>),
        ratingBreakdown: stats.reduce((acc, stat) => {
          if (!acc[stat.rating]) acc[stat.rating] = 0;
          acc[stat.rating] += stat._count;
          return acc;
        }, {} as Record<string, number>),
      },
      filters: {
        availableCategories: ['BUG_REPORT', 'FEATURE_REQUEST', 'GENERAL_FEEDBACK'],
        availableExperienceLevels: ['BEGINNER', 'INTERMEDIATE', 'ADVANCED'],
        availableRatings: [1, 2, 3, 4, 5],
        availableCountries: countries.map(c => c.country).filter(Boolean),
      },
    };
    
    // Set relaxed CORS headers for dashboard access
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
      'Pragma': 'no-cache',
      'Expires': '0',
    };
    
    return NextResponse.json(response, {
      status: 200,
      headers: corsHeaders,
    });
    
  } catch (error) {
    console.error('Dashboard API error:', error);
    
    const corsHeaders = {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    };
    
    return NextResponse.json(
      { error: 'Internal server error' },
      { 
        status: 500,
        headers: corsHeaders,
      }
    );
  }
}

// Handle OPTIONS request for CORS preflight
export async function OPTIONS() {
  return new NextResponse(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization',
    },
  });
} 