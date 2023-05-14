const result = utilscore.convertFlatPaths([
  {
    label: "a",
    children: [{ label: "a1" }, { label: "a2", children: [{ label: "a21" }] }],
  },
  { label: "b" },
]);
console.log(result);
