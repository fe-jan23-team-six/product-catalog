export const getVisibleButtons = (currentPage: number, lastPage: number) => {
  const result = [];

  if (lastPage <= 4) {
    for (let i = 1; i <= lastPage; i++) {
      result.push(i);
    }
  } else if (currentPage <= 2) {
    for (let i = 1; i <= 4; i++) {
      result.push(i);
    }
  } else if (currentPage >= lastPage - 1) {
    for (let i = lastPage - 3; i <= lastPage; i++) {
      result.push(i);
    }
  } else {
    for (let i = currentPage - 1; i <= currentPage + 2; i++) {
      result.push(i);
    }
  }

  return result;
};
