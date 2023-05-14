import { getTypeTag } from "./matche";

export function checkFunc(value: any) {
  if (typeof value !== "function")
    throw new TypeError(`${getTypeTag(value)} is not a function`);
}
