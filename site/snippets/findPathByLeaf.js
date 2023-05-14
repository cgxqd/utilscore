const arr = [
  {
    name: "awefawef",
    id: 111,
    children: [
      {
        name: "2222222aaa",
        id: 222,
        children: [
          {
            name: "cccccaaa",
            id: 333,
          },
        ],
      },
    ],
  },
];
console.log(utilscore.findPathByLeaf("id", 333, arr));
