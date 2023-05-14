import { hasIterable } from "./matche";
import { IterableIterator } from "../typings";
/**
 * 创建迭代器
 * @param {any[]} array
 * @returns {IterableIterator<any>}
 */
export function createIterator(array: any[]): IterableIterator<any> {
  const iterator: IterableIterator<any> = {
    next: () => {
      const value = array.shift();
      return { done: value === undefined, value: value };
    },
  };

  if (hasIterable) {
    iterator[Symbol.iterator] = () => iterator;
  }

  return iterator;
}
