import { checkFunc } from "./checkType";
import { ArrayCb } from "../typings";

export function find<T>(array: T[], cb: ArrayCb<T>): T | undefined {
  checkFunc(cb);
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    const result = cb(value, index, array);
    if (result) return value;
  }
}

export function findIndex<T>(array: T[], cb: ArrayCb<T>): number {
  checkFunc(cb);
  for (let index = 0; index < array.length; index++) {
    const value = array[index];
    const result = cb(value, index, array);
    if (result) return index;
  }
  return -1;
}
