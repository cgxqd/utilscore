import { get } from "./object";
import { Tree, convertTreeOpt } from "../typings";
import { find, findIndex } from "../_/es.array";

/**
 * 根据属性去重数组
 * @param array 目标数组
 * @param key 属性
 */
export const uniqueBy = function <T>(array: T[], key?: string): T[] {
  return array.filter(
    (element, index) =>
      findIndex(array, item => {
        return !key
          ? item === element
          : get(item as object, key) === get(element as object, key);
      }) === index
  );
};

/** 普通数组去重 */
export const unique = (arr: any[]) => uniqueBy(arr);

/**
 * 根据属性找出数组中最大值的一列
 * @param array 目标数组
 * @param key 属性
 */
export const maxNumBy = <T extends Record<any, any>>(
  array: T[],
  key: string
): T | undefined => {
  return find(array, item => {
    return (
      get(item, key) ===
      Math.max(...(array.map(row => get(row, key)) as number[]))
    );
  });
};

/**
 * 根据属性找出数组中最小值的一列
 * @param array 目标数组
 * @param key 属性
 */
export const minNumBy = <T extends Record<any, any>>(
  array: T[],
  key: string
): T | undefined =>
  find(
    array,
    item =>
      get(item, key) ===
      Math.min(...(array.map(row => get(row, key)) as number[]))
  );

/**
 * 将数组打乱
 * @param array 目标数组
 */
export const shuffle = <T>(array: T[]): T[] => {
  let i = array.length;
  while (i) {
    const j = Math.floor(Math.random() * i--);
    [array[j], array[i]] = [array[i], array[j]];
  }
  return array;
};

/**
 * 扁平化数组 ==> 树形结构
 * @param list 数组List
 * @param option 配置
 * @param option.pid 父节点id属性名
 * @param option.id 节点id属性名
 * @param option.children 节点children属性名
 * @param option.rootId 根节点id
 */

export const convertTree = <
  List extends Record<string, any>,
  Child extends string = "children"
>(
  list: List[] = [],
  option?: convertTreeOpt
): Tree<List, Child>[] => {
  const defOpt = { children: "children", pid: "pid", id: "id", rootId: 0 };
  const { pid, id, children, rootId }: convertTreeOpt = Object.assign(
    defOpt,
    option
  );
  return list.filter((item: Record<any, any>) => {
    const child = list.filter(c => c[pid] === item[id]);
    item[children] = child;
    return item[pid] === rootId;
  });
};

export const convert = convertTree;

/**
 * 树形结构 ==> 扁平化
 * @param nodes 节点树
 * @param childrenName 节点children属性名
 */
export const treeFlat = <
  T extends Record<any, any>,
  Child extends string = "children"
>(
  nodes: Tree<T, Child>[],
  childrenName: Child = "children" as Child
): T[] => {
  const rest = nodes.reduce((acc: T[], curr: any) => {
    // eslint-disable-next-line prefer-const
    let { [childrenName as keyof any]: children = [], ...keys } = curr;
    return acc.concat([keys], treeFlat<T, Child>(children, childrenName));
  }, []);
  return rest;
};

export const convertFlat = treeFlat;

/**
 * 树形结构转路径集合
 * @param nodes 节点树
 * @param childrenName 节点children属性名
 * @param path 路径
 * @param paths 路径集合
 */
export const convertFlatPaths = <
  T extends Record<any, any>,
  Child extends string = "children"
>(
  nodes: Tree<T, Child>[],
  childrenName: Child = "children" as Child,
  path: T[] = [],
  paths: T[][] = []
): T[][] => {
  for (let i = 0; i < nodes.length; i++) {
    const item: Tree<T, Child> = nodes[i];
    const { [childrenName]: children, ...rest } = item;
    const _paths = [...path, rest] as any;
    if (children) {
      convertFlatPaths<T, Child>(
        children as Tree<T, Child>[],
        childrenName,
        _paths,
        paths
      );
    } else paths.push(_paths);
  }
  return paths;
};

/**
 * 根据 key 递归查找链带关系
 * @param leafKey 节点属性名
 * @param leafValue 节点属性值
 * @param nodes 节点树
 * @param childrenName 节点children属性名
 * @param path 链带路径
 */
export const findPathByLeaf = <
  T extends Record<any, any>,
  Child extends string = "children"
>(
  leafKey: string,
  leafValue: any,
  nodes: Tree<T, Child>[],
  childrenName: Child = "children" as Child,
  path: T[] = []
): any => {
  for (let i = 0; i < nodes.length; i++) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { [childrenName]: _child, ...rest } = nodes[i];
    const tmpPath: T[] = [...path];
    if (leafValue == nodes[i][leafKey]) return tmpPath;
    tmpPath.push(rest as T);
    if (nodes[i][childrenName]) {
      const findResult = findPathByLeaf(
        leafKey,
        leafValue,
        nodes[i][childrenName] as Tree<T, Child>[],
        childrenName,
        tmpPath
      );
      if (findResult) {
        return findResult;
      }
    }
  }
};

/**
 * 返回按属性(sortKey)和顺序(sortBy)排序的对象数组。
 * @param array 目标数组
 * @param sortKey 排序属性
 * @param sortBy 排序方式 'desc降序' 、 'asc升序'
 */
export const orderBy = <T, sortKey extends keyof T>(
  array: T[],
  sortKey: sortKey[],
  sortBy: ("asc" | "desc")[]
) => {
  return [...array].sort((a, b) =>
    sortKey.reduce((acc, key, i) => {
      if (acc === 0) {
        const [p1, p2] =
          sortBy && sortBy[i] === "desc" ? [b[key], a[key]] : [a[key], b[key]];
        acc = p1 > p2 ? 1 : p1 < p2 ? -1 : 0;
      }
      return acc;
    }, 0)
  );
};

/**
 * while 遍历
 * @param array 目标数组
 * @param cb 遍历回调
 */
export function whileEach<T>(
  array: T[],
  cb: (curr: T, index: number, array: T[]) => any
) {
  const max = array.length - 1;
  let index = -1;
  while (index++ < max) {
    cb && cb(array[index], index, array);
  }
}
