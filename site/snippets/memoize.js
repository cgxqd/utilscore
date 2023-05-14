const test = text => {
  console.log("缓存");
  return text;
};
const T = utilscore.memoize(test, (text) => text);
console.log(T(11));
console.log(T(22));
console.log(T(22));
