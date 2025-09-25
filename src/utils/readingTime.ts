const WORDS_PER_MINUTE = 200;

export function estimateReadingTime(input: string): string {
  if (!input) return '1 min read';
  const sanitized = input
    .replace(/```[\s\S]*?```/g, ' ')
    .replace(/`[^`]*`/g, ' ')
    .replace(/<[^>]*>/g, ' ')
    .replace(/[#*_>\-]/g, ' ');
  const wordCount = sanitized.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.round(wordCount / WORDS_PER_MINUTE));
  return `${minutes} min read`;
}
