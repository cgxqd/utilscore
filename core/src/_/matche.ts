import { ARRAY_MAX_SAFE_INTEGER } from "./const";
/**
 * 获取类型 Tag
 * @param value
 */
export const getTypeTag = (value: any): string =>
  Object.prototype.toString.call(value);

/**
 * 获取类型
 * @param value
 */
export const getType = (value: any): string =>
  getTypeTag(value)
    .match(/\s([a-z]+)/i)?.[1]
    .toLocaleLowerCase() || "";

/**
 * 判断类型是否 NaN
 * @param value
 */
export const isNaN = (value: any): boolean =>
  isNumber(value) && value !== +value;

/**
 * 判断类型是否 Null
 * @param value
 */
export const isNull = (value: any): value is null => getType(value) === "null";

/**
 * 判断类型是否 Undefined
 * @param value
 */
export const isUndefined = (value: any): value is undefined => value === void 0;

/**
 * 判断类型是否 Boolean
 * @param value
 */
export const isBoolean = (value: any): value is boolean =>
  typeof value === "boolean";

/**
 * 判断类型是否 BigInt
 * @param value
 */
export const isBigInt = (value: any): value is bigint =>
  typeof value === "bigint";

/**
 * 判断类型是否 Number
 * @param value
 */
export const isNumber = (value: any): value is number =>
  typeof value === "number";

/**
 * 判断类型是否 String
 * @param value
 */
export const isString = (value: any): value is string =>
  typeof value === "string";

/**
 * 判断类型是否 Symbol
 * @param value
 */
export const isSymbol = (value: any): value is symbol =>
  typeof value == "symbol" ||
  (isObject(value) && getTypeTag(value) == "[object Symbol]");

/**
 * 判断是不是纯粹的对象
 * @param value
 */
export const isPrimeObject = (value: any): value is object =>
  getType(value) === "object";

/**
 * 判断是否 Object
 * @param value
 */
export const isObject = (value: any): boolean => {
  const type = typeof value;
  return value != null && (type === "object" || type === "function");
};

/**
 * 判断类型是否 RegExp
 * @param value
 */
export const isRegExp = (value: any): value is RegExp =>
  getType(value) === "regexp";

/**
 * 判断类型是否 Date
 * @param value
 */
export const isDate = (value: any): value is Date => getType(value) === "date";

/**
 * 判断类型是否 Array
 * @param value
 */
export const isArray = (value: any): value is [] => Array.isArray(value);

/**
 * 判断类型是否 Function
 * @param value
 */
export const isFunction = (value: any): value is () => void =>
  typeof value === "function";

/**
 * 判断类型是否 Promise
 * @param value
 */
export const isPromise = (value: any): value is Promise<any> => {
  if (Promise && Promise.resolve) {
    return Promise.resolve(value) === value;
  }
  return false;
};

/**
 * 判断是否整数
 * @param value
 */
export const isInteger = (value: any): boolean => value % 1 === 0;

/**
 * 数值是否在有效的数组安全长度范围
 * 大于等于0并且小于MAX_SAFE_INTEGER
 * @param value
 */
export const isArraySafeLength = (value: any): boolean =>
  isNumber(value) && value >= 0 && value < ARRAY_MAX_SAFE_INTEGER;

/**
 * 判断是否是类数组的对象
 * 1：不为null, undefined
 * 2：为object
 * 3: length属性为数组安全长度
 * @param value
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
 * @param value
 */
export const isEmpty = (value: any): boolean => {
  if (value == null) return true;
  if (isBoolean(value)) return !value;
  if (isNumber(value)) return !value;
  if (value instanceof Error) return value.message === "";
  switch (getType(value)) {
    case "function":
    case "string":
    case "array": {
      return !value.length;
    }
  }
  if (typeof value === "object") {
    if (hasIterable && typeof value[Symbol.iterator] === "function") {
      let size = 0;
      value.forEach(() => size++);
      return !size;
    }
    return !Object.keys(value).length;
  }

  return false;
};

/**
 * 判断对象自身属性中是否具有指定的属性
 * @param target
 * @param key 属性
 */
export const hasOwn = <T extends Record<string, any>>(
  target: T,
  key: string
): boolean => Object.prototype.hasOwnProperty.call(target, key);

/**
 * 判断是否支持 iterator
 */
export const hasIterable = !!(typeof Symbol === "function" && Symbol.iterator);
