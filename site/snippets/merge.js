const a = {
  a: 11,
  o: {
    b: 22,
  },
};
const b = {
  c: 33,
  o: {
    d: 44,
  },
};
// => {"a":11,"o":{"b":22,"d":44},"c":33}
console.log(utilscore.merge(a, b));
