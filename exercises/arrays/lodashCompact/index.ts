const arrTask2: any[] = [0, 1, false, 2, "", 3];

const compact = (arrTask2: any[]): any => arrTask2.filter(Boolean);
//return arr2.filter((value) => value);

console.log(`Task 2: ${compact(arrTask2)}`);
