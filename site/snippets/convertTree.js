var array = [
  { value: "zhinan", label: "指南", id: 1, parentId: 0 },
  { value: "shejiyuanze", label: "设计原则", id: 3, parentId: 1 },
  { id: 8, parentId: 3, value: "yizhi", label: "一致" },
  { id: 9, parentId: 3, value: "fankui", label: "反馈" },
  { id: 10, parentId: 3, value: "xiaolv", label: "效率" },
  { id: 11, parentId: 3, value: "kekong", label: "可控" },
  { value: "daohang", label: "导航", id: 4, parentId: 1 },
  { id: 12, parentId: 4, value: "cexiangdaohang", label: "侧向导航" },
  { id: 13, parentId: 4, value: "dingbudaohang", label: "顶部导航" },
  { value: "ziyuan", label: "资源", id: 2, parentId: 0 },
  { id: 5, parentId: 2, value: "axure", label: "Axure Components" },
  { id: 6, parentId: 2, value: "sketch", label: "Sketch Templates" },
  { id: 7, parentId: 2, value: "jiaohu", label: "组件交互文档" },
];
console.log(utilscore.convertTree(array, { pid: "parentId" }));
