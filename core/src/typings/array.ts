/* eslint-disable prettier/prettier */
export interface IterableIterator<T> extends Iterator<T> {
  [Symbol.iterator]?(): IterableIterator<T>;
}

export type ArrayCb<T> = (value: T, index: number, obj: T[]) => unknown;

export type Insertions<T> = T extends object ? { [K in keyof T]: T[K] } : T;
export type Tree<
  T extends Record<any, any>,
  Child extends string = "children"
> = {
  [k in keyof T | GetConst<Child, "children">]?: k extends Child
    ? Insertions<Tree<T, Child>>[]
    : k extends keyof T
    ? T[k]
    : never;
};

export type convertTreeOpt = {
  pid?: string;
  id?: string;
  children?: string;
  rootId?: number;
};

export type GetConst<T, S> = T extends string ? T : S;
