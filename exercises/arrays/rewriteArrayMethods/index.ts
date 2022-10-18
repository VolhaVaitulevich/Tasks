const myMap = <T>(arr: T[], callback: Function): T[] => {
  const resultArrMap = [];
  for (let i = 0; i < arr.length; i++) {
    const newItem = callback(arr[i], i, arr);
    resultArrMap.push(newItem);
  }
  return resultArrMap;
};

const myReduce = <T>(arr: T[], callback: Function, initialValue: T): T => {
  let sum = initialValue;
  for (let i = 0; i < arr.length; i++) {
    sum = callback(sum, arr[i], i, arr);
  }
  return sum;
};
