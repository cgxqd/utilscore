const f = utilscore.isEmpty;
console.log([f(0), f(1)]);
console.log([f({}), f({ a: "1" })]);
console.log([f([]), f([1])]);
console.log([f(""), f("123")]);
console.log([f(new Map()), f(new Map([["a", "b"]]))]);
console.log([f(new Set()), f(new Set([1]))]);
