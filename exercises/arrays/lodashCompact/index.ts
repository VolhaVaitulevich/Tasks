type MyArrayType = number | string | undefined | boolean | null;
const arrTask2: MyArrayType[] = [0, 1, false, 2, "", 3];

const compact = (arrTask2: MyArrayType[]): MyArrayType[] =>
  arrTask2.filter(Boolean);

console.log(`Task 2: ${compact(arrTask2)}`);
