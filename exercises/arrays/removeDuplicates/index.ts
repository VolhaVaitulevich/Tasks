type MyArrayType = number | string | undefined | null | boolean;
const arrTask6: MyArrayType[] = [1, 0, 1, 0];

const removeDups = (arrTask6: MyArrayType[]): MyArrayType[] =>
  Array.from(new Set(arrTask6));

console.log(`Task 6: ${removeDups(arrTask6)}`);
