<<<<<<< HEAD
const arrTask2 = [0, 1, false, 2, '', 3];

const compact = <T>(arrTask2: T[]): T[] => arrTask2.filter(Boolean);
=======
type MyArrayType = number | string | undefined | boolean | null;
const arrTask2: MyArrayType[] = [0, 1, false, 2, "", 3];

const compact = (arrTask2: MyArrayType[]): MyArrayType[] =>
  arrTask2.filter(Boolean);
>>>>>>> c66d6a1 (add new data type for array with multiple types)

console.log(`Task 2: ${compact(arrTask2)}`);
