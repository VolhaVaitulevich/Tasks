const sumDigProd = (...args: number[]): number => {
	const periodOfArgs = args.reduce((acc, item) => acc + item, 0);
	if (periodOfArgs < 10) {
		return periodOfArgs;
	} else {
		const periodOfArgsArr = Array.from(String(periodOfArgs), Number);
		return sumDigProd(periodOfArgsArr.reduce((acc, item) => acc * item, 1));
	}
};
