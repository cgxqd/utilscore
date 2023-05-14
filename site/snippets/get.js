const obj2 = {
  a: "111",
  o: {
    b: "222",
    c: {
      arr: ["aaaa", "bbbbb", "ccccc", ["dddd", ["eeee"]]],
      d: "333",
      f: function () {
        console.log("ffff");
      },
    },
  },
};
console.log(utilscore.get(obj2, "o.c.arr[3][1]"));
console.log(utilscore.get(obj2, "o.c.d"));
console.log(utilscore.get(obj2, "o.d"));
console.log(utilscore.get(obj2, "o.d", "默认值"));
