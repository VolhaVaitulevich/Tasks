const arrTask6 = [1, 0, 1, 0];

const removeDups = <T>(arrTask6: T[]): T[] => Array.from(new Set(arrTask6));

console.log(`Task 6: ${removeDups(arrTask6)}`);
