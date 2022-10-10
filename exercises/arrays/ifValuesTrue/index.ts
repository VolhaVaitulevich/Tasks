const allTruthy1 = (...args: number[]): boolean => {
  let arrTask5 = Array.from([...args], (x: number): number => x);
  return arrTask5.every(Boolean);
};

console.log(`Task 5: ${allTruthy1(5, 4, 3, 2, 1, 0)}`);
