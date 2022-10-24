const arrTask4: number[] = [4, 6, 5];
const a = 10;

const multiply =
	(arrTask4: number[]) =>
		(a: number): number[] =>
			arrTask4.map(item => item * a);

console.log(`Task 4: ${multiply(arrTask4)(a)}`);
