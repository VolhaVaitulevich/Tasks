type InputObjType = {
	[key: string]: any;
};
const get = (
	obj: InputObjType,
	pathStr: string | string[],
	defaultValue?: string,
): InputObjType => {
	let newPathStr: string[] = [];
	if (!Array.isArray(pathStr)) {
		newPathStr = pathStr.replace(/\[/g, '.').replace(/\]./g, '.').split('.');
	} else {
		newPathStr = newPathStr.concat(pathStr);
	}
	newPathStr.forEach(item => {
		if (obj[item] === undefined || obj[item] === null) {
			return defaultValue ? defaultValue : 'default';
		} else obj = obj[item];
	});

	return obj;
};
