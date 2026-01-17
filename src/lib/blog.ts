/**
 * Blog Utilities
 * 
 * Helper functions for blog functionality.
 */

/**
 * Calculate reading time for a given text
 * 
 * @param text - The text content to analyze
 * @param wordsPerMinute - Average reading speed (default: 200 WPM)
 * @returns Object with minutes and formatted string
 * 
 * @example
 * const { minutes, text } = getReadingTime(postContent);
 * // { minutes: 5, text: '5 min read' }
 */
export function getReadingTime(
  text: string,
  wordsPerMinute: number = 200
): { minutes: number; text: string } {
  // Remove HTML tags if present
  const cleanText = text.replace(/<[^>]*>/g, '');
  
  // Count words (split by whitespace)
  const words = cleanText.trim().split(/\s+/).length;
  
  // Calculate minutes
  const minutes = Math.ceil(words / wordsPerMinute);
  
  // Return formatted result
  return {
    minutes,
    text: `${minutes} min read`,
  };
}

/**
 * Format a date for blog display
 * 
 * @param date - Date string or Date object
 * @param format - 'short', 'long', or 'relative'
 * @returns Formatted date string
 */
export function formatBlogDate(
  date: string | Date,
  format: 'short' | 'long' | 'relative' = 'long'
): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'relative') {
    const now = new Date();
    const diffMs = now.getTime() - d.getTime();
    const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
    
    if (diffDays === 0) return 'Today';
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    if (diffDays < 365) return `${Math.floor(diffDays / 30)} months ago`;
    return `${Math.floor(diffDays / 365)} years ago`;
  }
  
  if (format === 'short') {
    return d.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  }
  
  // Long format (default)
  return d.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

/**
 * Generate excerpt from content if not provided
 * 
 * @param content - Full content text
 * @param maxLength - Maximum excerpt length (default: 160)
 * @returns Truncated excerpt with ellipsis
 */
export function generateExcerpt(content: string, maxLength: number = 160): string {
  // Remove HTML tags
  const cleanText = content.replace(/<[^>]*>/g, '');
  
  // Truncate and add ellipsis if needed
  if (cleanText.length <= maxLength) return cleanText;
  
  // Find last space before maxLength to avoid cutting words
  const truncated = cleanText.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(' ');
  
  return truncated.substring(0, lastSpace) + '...';
}
