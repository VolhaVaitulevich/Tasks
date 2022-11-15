const myMap = <TInput, TOutput>(
	arr: TInput[],
	callback: (item: TInput, index: number, arr: TInput[]) => TOutput,
): TOutput[] => {
	const resultArrMap = [];
	for (let i = 0; i < arr.length; i++) {
		const newItem = callback(arr[i], i, arr);
		resultArrMap.push(newItem);
	}
	return resultArrMap;
};

const myReduce = <TInput, TOutput>(
	arr: TInput[],
	callback: (
		acc: TOutput,
		item: TInput,
		index: number,
		arr: TInput[],
	) => TOutput,
	initialValue: TOutput,
): TOutput => {
	let sum = initialValue;
	for (let i = 0; i < arr.length; i++) {
		sum = callback(sum, arr[i], i, arr);
	}
	return sum;
};
