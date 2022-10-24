const adjectives = {
	a: 'example',
	b: 'test',
	c: 'adjective',
	d: 'test',
	e: 'test',
	f: 'adjective',
};

const countNumberOfOccurrences = (
	adj: Record<string, string>,
): Record<string, number> => {
	const arr = Object.values(adj);
	return arr.reduce(
		(acc: Record<string, number>, adjective): Record<string, number> => {
			// eslint-disable-next-line no-prototype-builtins
			if (acc.hasOwnProperty(adjective)) {
				acc[adjective] += 1;
			} else {
				acc[adjective] = 1;
			}
			return acc;
		},
		{},
	);
};

console.log(countNumberOfOccurrences(adjectives));
