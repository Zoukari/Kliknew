/**
 * Strip HTML tags from a string.
 */
export function stripHtml(html: string): string {
  if (typeof html !== 'string') return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return (doc.body?.textContent ?? '').trim();
}
