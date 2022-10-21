const num: number = 5;
const len: number = 7;

const arrayOfMultiples1 = (num: number, len: number) =>
  Array.from(
    { length: len },
    (value: number, i: number): number => num * i + num
  );

console.log(`Task 1: ${arrayOfMultiples1(num, len)}`);
