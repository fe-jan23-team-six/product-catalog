export const getPluralWord = (word: string, count: number): string => {
  const label = `${count} ${word}`;

  return count === 1
    ? label
    : label + 's';
};
