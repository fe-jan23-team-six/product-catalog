export const convertSlugToDigit = (slug: string): number => {
  const alphanumericSlug = slug.replace(/[^a-zA-Z0-9]/g, '');
  const truncatedSlug
  = alphanumericSlug.slice(0, 2) + alphanumericSlug.slice(-2);
  const digit = parseInt(truncatedSlug, 36);

  return digit;
};
