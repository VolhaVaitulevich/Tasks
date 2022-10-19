const num = 5;
const len = 7;

const arrayOfMultiples1 = (num: number, len: number): number[] =>
	Array.from(
		{ length: len },
		(value: number, i: number): number => num * i + num,
	);

console.log(`Task 1: ${arrayOfMultiples1(num, len)}`);
