const users = [
  { name: "aaa", age: 48 },
  { name: "awegawe", age: 36 },
  { name: "aweaw", age: 40 },
];
// 降序
console.log(["降序", utilscore.orderBy(users, ["age"], ["desc"])]);
// 升序
console.log(["升序", utilscore.orderBy(users, ["age"], ["asc"])]);
