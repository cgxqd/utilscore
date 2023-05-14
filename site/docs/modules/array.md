# Array 数组

## uniqueBy

根据属性去重数组

- `array` 目标数组
- `key` 属性

::: details 类型定义
``` ts
declare const uniqueBy: <T> (array: T[], key?: string) => T[];
```
:::
::: code uniqueBy

## maxNumBy

根据属性找出数组中最大值的一列

- `array` 目标数组
- `key` 属性

::: details 类型定义
``` ts
declare const maxNumBy: <T extends Record<any, any>>
    (array: T[], key: string) => T | undefined;
```
:::
::: code maxNumBy

## minNumBy

根据属性找出数组中最小值的一列

- `array` 目标数组
- `key` 属性

::: details 类型定义
``` ts
declare const minNumBy: <T extends Record<any, any>>
    (array: T[], key: string) => T | undefined;
```
:::
::: code minNumBy

## shuffle

将数组打乱

- `array` 目标数组

::: details 类型定义
``` ts
declare const shuffle: <T>(array: T[]) => T[];
```
:::

::: code shuffle

## convertTree

扁平化数组 ==> 树形结构

- `list` 数组List
- `option` 配置
- `option.pid` 父节点id属性名
- `option.id` 节点id属性名
- `option.children` 节点children属性名
- `option.rootId` 根节点id

::: details 类型定义
``` ts
declare const convertTree: <
    List extends Record<string, any>, 
    Child extends string = "children"
>(
    list?: List[], 
    option?: convertTreeOpt
) => Tree<List, Child>[];
```
:::
::: code convertTree

## treeFlat

树形结构 ==> 扁平化

- `nodes` 节点树
- `childrenName` 节点children属性名

::: details 类型定义
```ts
declare const treeFlat: <
    T extends Record<any, any>, 
    Child extends string = "children"
>(
    nodes: Tree<T, Child>[], 
    childrenName?: Child
) => T[];
```
:::
::: code treeFlat

## convertFlatPaths

树形结构转路径集合

- `nodes` 节点树
- `childrenName` 节点children属性名

::: details 类型定义
``` ts
declare const convertFlatPaths: <
    T extends Record<any, any>, 
    Child extends string = "children"
>(
    nodes: Tree<T, Child>[], 
    childrenName?: Child, 
    path?: T[], 
    paths?: T[][]
) => T[][];
```
:::
::: code convertFlatPaths

## findPathByLeaf

根据 key 递归查找链带关系

- `leafKey` 节点属性名
- `leafValue` 节点属性值
- `nodes` 节点树
- `childrenName` 节点children属性名
 
::: details 类型定义
```ts
declare const findPathByLeaf: <
    T extends Record<any, any>, 
    Child extends string = "children"
>(
    leafKey: string, 
    leafValue: any, 
    nodes: Tree<T, Child>[], 
    childrenName?: Child, 
    path?: T[]
) => any;
```
:::
::: code findPathByLeaf

## orderBy

返回按属性(sortKey)和顺序(sortBy)排序的对象数组。

- `array` 目标数组
- `sortKey` 排序属性
- `sortBy` sortBy 排序方式 'desc降序' 、 'asc升序'

::: details 类型定义
``` ts
declare const orderBy: <
    T, sortKey extends keyof T
>(
    array: T[], 
    sortKey: sortKey[], 
    sortBy: ("asc" | "desc")[]
) => T[];
```
:::
::: code orderBy

## whileEach

while 遍历 ArrayList

* `array` 目标数组
* `cb` 遍历回调

::: details 类型定义
``` ts
declare function whileEach<T>(
    array: T[], 
    cb: (
        curr: T, 
        index: number, 
        array: T[]
) => any): void;

```
:::
::: code whileEach


