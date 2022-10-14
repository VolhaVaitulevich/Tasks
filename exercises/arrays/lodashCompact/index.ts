<<<<<<< HEAD
<<<<<<< HEAD
=======
type MyArrayType = number | string | undefined | boolean | null;
const arrTask2: MyArrayType[] = [0, 1, false, 2, "", 3];
=======
const arrTask2 = [0, 1, false, 2, "", 3];
>>>>>>> 2857ecf (add generics)

const compact = <T>(arrTask2: T[]): T[] => arrTask2.filter(Boolean);

console.log(`Task 2: ${compact(arrTask2)}`);
>>>>>>> c66d6a1 (add new data type for array with multiple types)
