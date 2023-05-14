const arr = [
  { name: "1111", user: { name: "aaa" } },
  { name: "1111", user: { name: "ccc" } },
  { name: "2223", user: { name: "aaa" } },
  { name: "333", user: { name: "ddd" } },
];
console.log(utilscore.uniqueBy(arr, "name"));
console.log(utilscore.uniqueBy(arr, "user.name"));
