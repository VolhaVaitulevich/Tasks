const arrTask3: number[] = [25, 143, 89, 13, 105];

const secondLargest = (arrTask3: number[]): number => {
	return arrTask3.sort((a, b) => a - b)[arrTask3.length - 2];
};

console.log(`Task 3: ${secondLargest(arrTask3)}`);
