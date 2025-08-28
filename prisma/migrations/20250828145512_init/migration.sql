-- CreateEnum
CREATE TYPE "public"."FeedbackCategory" AS ENUM ('BUG_REPORT', 'FEATURE_REQUEST', 'GENERAL_FEEDBACK');

-- CreateEnum
CREATE TYPE "public"."ExperienceLevel" AS ENUM ('BEGINNER', 'INTERMEDIATE', 'ADVANCED');

-- CreateTable
CREATE TABLE "public"."feedback" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "usagePurposes" JSONB NOT NULL,
    "category" "public"."FeedbackCategory" NOT NULL,
    "experienceLevel" "public"."ExperienceLevel" NOT NULL,
    "rating" INTEGER NOT NULL,
    "message" TEXT NOT NULL,
    "country" TEXT,
    "city" TEXT,
    "region" TEXT,
    "timezone" TEXT,
    "userAgent" TEXT,
    "ipAddress" TEXT,

    CONSTRAINT "feedback_pkey" PRIMARY KEY ("id")
);
