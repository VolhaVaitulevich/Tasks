const adjectives = {
  a: "example",
  b: "test",
  c: "adjective",
  d: "test",
  e: "test",
  f: "adjective",
};

const countNumberOfOccurrences = (adj: Record<string, string>) => {
  let arr = Object.values(adj);
  return arr.reduce(
    (acc: Record<string, number>, adjective): Record<string, number> => {
      if (acc.hasOwnProperty(adjective)) {
        acc[adjective] += 1;
      } else {
        acc[adjective] = 1;
      }
      return acc;
    },
    {}
  );
};

console.log(countNumberOfOccurrences(adjectives));
