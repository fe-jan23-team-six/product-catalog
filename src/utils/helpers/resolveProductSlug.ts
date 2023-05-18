export const resolveProductSlug = (
  namespaceId: string,
  capacity: string,
  currentColor: string,
): string => (
  `${namespaceId}-${capacity.toLowerCase()}-${currentColor}`
);
