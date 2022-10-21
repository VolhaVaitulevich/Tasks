const numberPairs = (str: string): number => {
	const arrOfNumbers = str.split(' ').slice(1);
	const objOfDuplicates = arrOfNumbers.reduce(
		(acc: Record<string, number>, item): Record<string, number> => {
			acc[item] = +arrOfNumbers.filter(num => num === item).length;
			return acc;
		},
		{},
	);
	console.log(objOfDuplicates);
	let numberOfPairs = 0;
	for (const item in objOfDuplicates) {
		numberOfPairs += Math.floor(objOfDuplicates[item] / 2);
	}
	return numberOfPairs;
};

console.log(numberPairs('7 1 2 1 2 1 3 2'));
