const numberPairs = (str: string): number => {
	const arrOfNumbers = str.split(' ').slice(1);
	const objOfDuplicates = arrOfNumbers.reduce(
		(acc: Record<string, number>, item): Record<string, number> => {
			console.log(acc);
			if (Object.prototype.hasOwnProperty.call(acc, item)) {
				acc[item] += 1;
			} else {
				acc[item] = 1;
			}
			return acc;
		},
		{},
	);
	return Object.values(objOfDuplicates).reduce(
		(acc, item) => (acc += Math.floor(item / 2)),
		0,
	);
};

console.log(numberPairs('7 1 2 1 2 1 3 2'));
