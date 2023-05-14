const obj = {
  a: "111",
  o: {
    b: "222",
  },
};
obj.e = obj;
var _obj = utilscore.deepClone(obj);
obj.o.b = "test";
console.log({ obj, _obj });
