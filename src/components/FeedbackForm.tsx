'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { feedbackFormSchema, type FeedbackFormData, USAGE_PURPOSES, FEEDBACK_CATEGORIES, EXPERIENCE_LEVELS } from '@/lib/validations/feedback';
import { Star, Send, CheckCircle } from 'lucide-react';

export default function FeedbackForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showCustomPurpose, setShowCustomPurpose] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    reset,
  } = useForm<FeedbackFormData>({
    resolver: zodResolver(feedbackFormSchema),
    defaultValues: {
      usagePurposes: { selected: [], custom: '' },
      rating: undefined,
    },
  });

  const watchedUsagePurposes = watch('usagePurposes.selected');

  const toggleUsagePurpose = (purpose: string) => {
    const current = watchedUsagePurposes || [];
    if (current.includes(purpose)) {
      setValue('usagePurposes.selected', current.filter(p => p !== purpose));
    } else {
      setValue('usagePurposes.selected', [...current, purpose]);
    }
  };

  const onSubmit = async (data: FeedbackFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch('/api/feedback', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
        reset({
          usagePurposes: { selected: [], custom: '' },
          rating: undefined,
        });
        setShowCustomPurpose(false);
      } else {
        const errorData = await response.json();
        alert(`Error: ${errorData.error}`);
      }
    } catch {
      alert('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="max-w-2xl mx-auto p-8 text-center bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Thank you for your feedback!</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-6">Your input helps us improve Jam Band for everyone.</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">To submit another feedback, please refresh the page.</p>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-5 md:p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">We&apos;d Love Your Feedback!</h2>
        <p className="text-gray-600 dark:text-gray-300">Help us make Jam Band even better for musicians like you.</p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Feedback Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            What type of feedback is this? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-x-5 gap-y-2 flex-wrap">
            {FEEDBACK_CATEGORIES.map((category) => (
              <label key={category.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value={category.value}
                  {...register('category')}
                  className="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{category.label}</span>
              </label>
            ))}
          </div>
          {errors.category && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.category.message}</p>
          )}
        </div>

        {/* Experience Level */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            What&apos;s your experience level as a musician? <span className="text-red-500">*</span>
          </label>
          <div className="flex gap-x-5 gap-y-2 flex-wrap">
            {EXPERIENCE_LEVELS.map((level) => (
              <label key={level.value} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="radio"
                  value={level.value}
                  {...register('experienceLevel')}
                  className="border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{level.label}</span>
              </label>
            ))}
          </div>
          {errors.experienceLevel && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.experienceLevel.message}</p>
          )}
        </div>

        {/* Rating */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            How likely are you to recommend Jam Band to a friend? <span className="text-red-500">*</span>
          </label>
          <div className="flex flex-col space-y-2 w-fit">
            <div className="flex items-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  type="button"
                  onClick={() => setValue('rating', star)}
                  className="focus:outline-none hover:scale-110 transition-transform"
                >
                  <Star
                    className={`w-6 h-6 ${watch('rating') && star <= watch('rating')!
                      ? 'text-yellow-400 fill-current'
                      : 'text-gray-300 dark:text-gray-600'
                    }`}
                  />
                </button>
              ))}
            </div>
            <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400">
              <span>Not likely</span>
              <span>Very likely</span>
            </div>
          </div>
          {errors.rating && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.rating.message}</p>
          )}
        </div>

        {/* Usage Purposes */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            How do you use Jam Band? <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {USAGE_PURPOSES.map((purpose) => (
              <label key={purpose} className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={watchedUsagePurposes?.includes(purpose) || false}
                  onChange={() => toggleUsagePurpose(purpose)}
                  className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
                />
                <span className="text-sm text-gray-700 dark:text-gray-300">{purpose}</span>
              </label>
            ))}
          </div>
          
          {/* Custom Purpose Input */}
          <div className="flex items-center space-x-2 mb-2">
            <input
              type="checkbox"
              checked={showCustomPurpose}
              onChange={(e) => setShowCustomPurpose(e.target.checked)}
              className="rounded border-gray-300 dark:border-gray-600 text-blue-600 focus:ring-blue-500 bg-white dark:bg-gray-700"
            />
            <span className="text-sm text-gray-700 dark:text-gray-300">Other (please specify)</span>
          </div>
          
          {showCustomPurpose && (
            <input
              type="text"
              {...register('usagePurposes.custom')}
              placeholder="Describe how you use Jam Band..."
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          )}
          
          {errors.usagePurposes && (
            <p className="text-red-500 dark:text-red-400 text-sm mt-1">{errors.usagePurposes.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-3">
            Your feedback message (optional)
          </label>
          <textarea
            {...register('message')}
            rows={4}
            placeholder="Tell us what you think, what you'd like to see, or any issues you've encountered... (optional)"
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center space-x-2"
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              <span>Submitting...</span>
            </>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Submit Feedback</span>
            </>
          )}
        </button>
      </form>
    </div>
  );
} 