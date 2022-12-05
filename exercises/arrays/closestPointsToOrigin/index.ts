const closestPointsToOrigin = (
	arr: Array<[number, number]>,
	k: number,
): Array<[number, number]> => {
	return arr.sort(sortPoints).slice(0, k);
};

const sortPoints = (a: number[], b: number[]): number => {
	return (
		Math.pow(a[0], 2) +
		Math.pow(a[1], 2) -
		(Math.pow(b[0], 2) + Math.pow(b[1], 2))
	);
};

const arrOfPoints: Array<[number, number]> = [
	[0, 3],
	[2, 2],
	[7, 3],
	[4, -2],
];

console.log(closestPointsToOrigin(arrOfPoints, 2));
