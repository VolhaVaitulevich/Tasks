const arrOfStrings = ['abc', 'ab10c', 'a10bc', 'bcd'];

const numInStr = (arrOfStrings: string[]): string[] => {
	return arrOfStrings.filter(string => string.match(/\d+/g));
};

console.log(numInStr(arrOfStrings));
