const allTruthy1 = (...args: (number | string)[]): boolean => {
  return [...args].every(Boolean);
};

console.log(`Task 5: ${allTruthy1(5, 4, 3, 2, 1, 0)}`);
