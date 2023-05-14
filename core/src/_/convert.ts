import { getType, isArrayLike, isObject } from "./matche";
import {
  ARRAY_MAX_SAFE_INTEGER,
  freeParseInt,
  INFINITY,
  MAX_INTEGER,
  NAN,
  reIsBadHex,
  reIsBinary,
  reIsOctal,
  reTrim,
} from "./const";

/**
 * 将数值转换为整数
 * @param {number} value
 * @returns {number}
 */
export const toInteger = (value: number): number => {
  const number = toFinite(value);
  const remainder = number % 1;
  return remainder ? number - remainder : number;
};

/**
 * 将数值转为数组安全长度
 * @param {number} value
 * @returns {number}
 */
export const toArraySafeLength = (value: number): number => {
  const len = toInteger(value);
  return Math.min(Math.max(len, 0), ARRAY_MAX_SAFE_INTEGER);
};

/**
 * 转换为数组
 * @param {any} value
 * @returns
 */
export const toArray = (value: any): any[] => {
  let def: any[] = [];
  const type = getType(value);
  if (type === "string") return Array.prototype.slice.call(value);
  if (isArrayLike(value)) {
    const length = toArraySafeLength(value.length);
    def = new Array(length);
    for (let index = 0; index < length; index++) def[index] = value[index];
  }
  if (type === "map")
    value.forEach((value: any, key: any) => def.push([key, value]));
  if (type === "set") value.forEach((value: any) => def.push(value));
  return def;
};

/**
 * 转换为 string 类型
 * @param {any} value
 * @returns {string}
 */
export const toString = (value: any): string => {
  const type = getType(value);
  if (value == null) return "";
  if (["string", "array"].includes(type)) return String(value);
  if (type === "symbol") value = value.toString();
  const result = `${value}`;
  return result == "0" && 1 / value == -INFINITY ? "-0" : result;
};

/**
 * 转换为数字
 * @param {any} value
 * @returns {number}
 */
export const toNumber = (value: any): number => {
  const type = getType(value);
  if (type === "number") return value;
  if (type === "symbol") return NAN;
  if (isObject(value)) {
    const other = typeof value.valueOf === "function" ? value.valueOf() : value;
    value = isObject(other) ? `${other}` : other;
  }
  if (type !== "string") return value === 0 ? value : +value;
  // 去除前后空格
  value = value.replace(reTrim, "");
  // 判断是否为二进制
  const isBinary = reIsBinary.test(value);
  // 如果是二进制或八进制，就直接转换为数字返回
  return isBinary || reIsOctal.test(value)
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : // 不是的话就判断是否为有错的16进制，是的话返回NaN，否就转化为数字返回
    reIsBadHex.test(value)
    ? NAN
    : +value;
};

/**
 * 将值转换为有限数字
 * @param {any} value
 * @returns {number}
 */
export const toFinite = (value: number): number => {
  if (!value) value === 0 ? value : 0;
  value = toNumber(value);
  if (value === INFINITY || value === -INFINITY) {
    const sign = value < 0 ? -1 : 1;
    return sign * MAX_INTEGER;
  }
  return value === value ? value : 0;
};
