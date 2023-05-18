export const getNumberDependingWidth = (screenWidth: number): number => {
  if (screenWidth <= 639) {
    return 1;
  }

  if (screenWidth >= 640 && screenWidth <= 1200) {
    return 3;
  }

  return 4;
};
