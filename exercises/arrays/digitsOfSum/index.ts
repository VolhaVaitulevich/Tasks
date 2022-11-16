const sumDigProd = (...args: number[]): number => {
	let periodOfArgs = args.reduce((acc: number, item: number): number => {
		acc = acc + item;
		return acc;
	}, 0);
	while (periodOfArgs > 9) {
		periodOfArgs = Array.from(String(periodOfArgs), Number).reduce(
			(acc: number, item: number): number => {
				acc = acc * item;
				return acc;
			},
			1,
		);
	}
	return periodOfArgs;
};
