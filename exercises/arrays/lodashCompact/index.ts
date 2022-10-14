const arrTask2 = [0, 1, false, 2, "", 3];

const compact = <T>(arrTask2: T[]): T[] => arrTask2.filter(Boolean);

console.log(`Task 2: ${compact(arrTask2)}`);
