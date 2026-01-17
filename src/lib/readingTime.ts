/**
 * Reading Time Calculator
 *
 * Calculates estimated reading time based on word count.
 * Average reading speed: 200-250 words per minute.
 */

export function calculateReadingTime(content: string): string {
  // Strip HTML tags if present
  const text = content.replace(/<[^>]*>/g, '');

  // Count words
  const words = text.trim().split(/\s+/).length;

  // Calculate minutes (using 200 wpm for comfortable reading)
  const minutes = Math.ceil(words / 200);

  return `${minutes} min read`;
}

export function getWordCount(content: string): number {
  const text = content.replace(/<[^>]*>/g, '');
  return text.trim().split(/\s+/).length;
}
