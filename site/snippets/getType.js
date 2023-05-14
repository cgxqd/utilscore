const f = utilscore.getType;
console.log(
  f(""),
  f(123),
  f(true),
  f(),
  f(null),
  f([]),
  f({}),
  f(new Date()),
  f(new Set())
);
