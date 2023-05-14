import { ARRAY_MAX_SAFE_INTEGER } from "./const";
/**
 * 获取类型 Tag
 * @param {any} value
 * @returns {string}
 */
export const getTypeTag = (value: any): string =>
  Object.prototype.toString.call(value);

/**
 * 获取类型
 * @param {any} value
 * @returns {string}
 */
export const getType = (value: any): string =>
  getTypeTag(value)
    .match(/\s([a-z]+)/i)?.[1]
    .toLocaleLowerCase() || "";

/**
 * 判断类型是否 NaN
 * @param {any} value
 * @returns {boolean}
 */
export const isNaN = (value: any): boolean =>
  isNumber(value) && value !== +value;

/**
 * 判断类型是否 Null
 * @param {any} value
 * @returns {value is null}
 */
export const isNull = (value: any): value is null => getType(value) === "null";

/**
 * 判断类型是否 Undefined
 * @param {any} value
 * @returns {value is undefined}
 */
export const isUndefined = (value: any): value is undefined => value === void 0;

/**
 * 判断类型是否 Boolean
 * @param {any} value
 * @returns {value is boolean}
 */
export const isBoolean = (value: any): value is boolean =>
  typeof value === "boolean";

/**
 * 判断类型是否 BigInt
 * @param {any} value
 * @return {value is bigint}
 */
export const isBigInt = (value: any): value is bigint =>
  typeof value === "bigint";

/**
 * 判断类型是否 Number
 * @param {any} value
 * @return {value is number}
 */
export const isNumber = (value: any): value is number =>
  typeof value === "number";

/**
 * 判断类型是否 String
 * @param {any} value
 * @return {value is string}
 */
export const isString = (value: any): value is string =>
  typeof value === "string";

/**
 * 判断类型是否 Symbol
 * @param {any} value
 * @returns {value is symbol}
 */
export const isSymbol = (value: any): value is symbol =>
  typeof value == "symbol" ||
  (isObject(value) && getTypeTag(value) == "[object Symbol]");

/**
 * 判断是不是纯粹的对象
 * @param {any} value
 * @returns {value is object}
 */
export const isPrimeObject = (value: any): value is object =>
  getType(value) === "object";

/**
 * 判断是否 Object
 * @param {any} value
 * @returns {boolean}
 */
export const isObject = (value: any): boolean => {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
};

/**
 * 判断类型是否 RegExp
 * @param {any} value
 * @returns {value is RegExp}
 */
export const isRegExp = (value: any): value is RegExp =>
  getType(value) === "regexp";

/**
 * 判断类型是否 Date
 * @param {any} value
 * @returns {value is Date}
 */
export const isDate = (value: any): value is Date => getType(value) === "date";

/**
 * 判断类型是否 Array
 * @param {any} value
 * @returns {value is []}
 */
export const isArray = (value: any): value is [] => Array.isArray(value);

/**
 * 判断类型是否 Function
 * @param {any} value
 * @returns {value is Function}
 */
export const isFunction = (value: any): value is () => void =>
  typeof value === "function";

/**
 * 判断类型是否 Promise
 * @param {any} value
 * @returns {value is Promise}
 */
export const isPromise = (value: any): value is Promise<any> => {
  if (Promise && Promise.resolve) {
    return Promise.resolve(value) === value;
  }
  return false;
};

/**
 * 判断是否整数
 * @param {any} value
 * @returns {boolean}
 */
export const isInteger = (value: any): boolean => value % 1 === 0;

/**
 * 数值是否在有效的数组安全长度范围
 * 大于等于0并且小于MAX_SAFE_INTEGER
 * @param {any} value
 * @returns {boolean}
 */
export const isArraySafeLength = (value: any): boolean =>
  isNumber(value) && value >= 0 && value < ARRAY_MAX_SAFE_INTEGER;

/**
 * 判断是否是类数组的对象
 * 1：不为null, undefined
 * 2：为object
 * 3: length属性为数组安全长度
 * @param {any} value
 * @returns {boolean}
 */
export const isArrayLike = (value: any): boolean => {
  return (
    value &&
    isObject(value) &&
    isFinite(value.length) &&
    isArraySafeLength(value.length)
  );
};

/**
 * 判断元素是否为空
 * @param {any} value
 * @returns {boolean}
 */
export const isEmpty = (value: any): boolean => {
  if (value == null) return true;
  else if (value === "object") return !Object.keys(value).length;
  else if (isArray(value)) return !value.length;
  else if (isString(value)) return !value;
  else return value.toString().length == 0;
};

/**
 * 判断对象自身属性中是否具有指定的属性
 * @template {Record<string, any>} T
 * @param {T} target
 * @param {string} key 属性
 * @returns {boolean}
 */
export const hasOwn = <T extends Record<string, any>>(
  target: T,
  key: string
): boolean => Object.prototype.hasOwnProperty.call(target, key);

export const hasIterable = !!(typeof Symbol === "function" && Symbol.iterator);
