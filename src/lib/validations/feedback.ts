import { z } from "zod";

export const feedbackFormSchema = z.object({
  usagePurposes: z.object({
    selected: z.array(z.string()).min(1, "Please select at least one usage purpose"),
    custom: z.string().optional(),
  }),
  category: z.enum(["BUG_REPORT", "FEATURE_REQUEST", "GENERAL_FEEDBACK"]),
  experienceLevel: z.enum(["BEGINNER", "INTERMEDIATE", "ADVANCED"]),
  rating: z.number().min(1).max(5),
  message: z.string().optional(),
});

export type FeedbackFormData = z.infer<typeof feedbackFormSchema>;

export const USAGE_PURPOSES = [
  "Jamming with friends",
  "Solo practice",
  "Songwriting",
  "Learning music theory",
  "Just for fun",
  "Brainstorming",
  "Music production",
  "Creative expression",
] as const;

export const FEEDBACK_CATEGORIES = [
  { value: "BUG_REPORT", label: "Bug Report" },
  { value: "FEATURE_REQUEST", label: "Feature Request" },
  { value: "GENERAL_FEEDBACK", label: "General Feedback" },
] as const;

export const EXPERIENCE_LEVELS = [
  { value: "BEGINNER", label: "Beginner" },
  { value: "INTERMEDIATE", label: "Intermediate" },
  { value: "ADVANCED", label: "Advanced" },
] as const; 