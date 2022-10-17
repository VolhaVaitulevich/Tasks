const adjectives = {
  a: "example",
  b: "test",
  c: "adjective",
  d: "test",
  e: "test",
  f: "adjective",
};

interface AdjectivesObject {
  [key: string]: string;
}

interface NumberOfAdjObject {
  [key: string]: number;
}

const countNumberOfOccurrences = (adj: AdjectivesObject) => {
  let arr = Object.values(adj);
  return arr.reduce((acc: NumberOfAdjObject, adjective): NumberOfAdjObject => {
    if (acc.hasOwnProperty(adjective)) {
      acc[adjective] += 1;
    } else {
      acc[adjective] = 1;
    }
    return acc;
  }, {});
};

console.log(countNumberOfOccurrences(adjectives));
