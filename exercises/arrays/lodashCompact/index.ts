type FalsyValues = undefined | null | 0 | "" | `` | -0 | 0n;

const arrTask2 = [0, 1, false, , -0, 2, "", 3];

const compact = <T>(arrTask2: (T | FalsyValues)[]): T[] =>
  arrTask2.filter((value): value is T => Boolean(value));

console.log(`Task 2: ${compact(arrTask2)}`);
