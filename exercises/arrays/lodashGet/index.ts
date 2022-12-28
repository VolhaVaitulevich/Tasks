type InputObjType = {
	[key: string]: any;
};
const get = (
	obj: InputObjType,
	pathStr: string | string[],
	defaultValue?: string,
): InputObjType | string => {
	if (obj === null || typeof obj !== 'object') {
		return defaultValue ? defaultValue : 'default';
	}
	let newPathStr: string[] = [];
	if (!Array.isArray(pathStr)) {
		newPathStr = pathStr.replace(/\[/g, '.').replace(/\]./g, '.').split('.');
	} else {
		newPathStr = newPathStr.concat(pathStr);
	}
	if (
		newPathStr.some(item => {
			if (obj[item] === undefined || obj[item] === null) {
				return true;
			} else obj = obj[item];
		})
	) {
		return defaultValue ? defaultValue : 'default';
	} else return obj;
};
