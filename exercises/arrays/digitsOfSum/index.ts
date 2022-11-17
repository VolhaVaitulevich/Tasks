const sumDigProd = (...args: number[]): number => {
	return periodOfDigits(
		args.reduce((acc, item) => {
			acc = acc + item;
			return acc;
		}, 0),
	);
};
const periodOfDigits = (periodOfArgs: number): number => {
	return periodOfArgs < 10
		? periodOfArgs
		: periodOfDigits(
				Array.from(String(periodOfArgs), Number).reduce((acc, item) => {
					acc = acc * item;
					return acc;
				}, 1),
		  );
};
