import { getType, hasOwn, isPrimeObject } from "../_/matche";
import { toString } from "../_/convert";
import { DeepMerge, GetFieldDeep } from "../typings";
import { cloneMap, cloneRegExp, cloneSet, cloneSymbol } from "../_/clone";

/**
 * 深度克隆
 * @param target 目标对象
 */
export const deepClone = <T>(target: T, map = new Map()): T | null => {
  if (target === null) return null;
  if (typeof target !== "object") return target;
  let _target: any, proto;
  switch (getType(target)) {
    case "array":
      _target = [];
      break;
    case "regexp":
      return cloneRegExp(target);
    case "symbol":
      return cloneSymbol(target);
    case "date":
      _target = new Date((target as any).getTime());
      break;
    case "set":
      return cloneSet(target, map, deepClone);
    case "map":
      return cloneMap(target, map, deepClone);
    default:
      proto = Object.getPrototypeOf(target);
      _target = Object.create(proto);
      break;
  }
  // 防止循环引用
  if (map.get(target)) return map.get(target);
  map.set(target, _target);
  for (const i in target) {
    _target[i] = deepClone(target[i], map);
  }
  return _target;
};

/**
 * 对象合并，与Object.assign不同的是，不覆盖前边已有属性的值
 * @param target 目标对象
 * @param source 来源对象
 */
export const merge = <T extends Record<any, any>, S extends Record<any, any>>(
  target: T,
  source: S
): DeepMerge<T, S> => {
  for (const key in source) {
    if (!hasOwn(target, key)) {
      target[key] = source[key];
    } else if (isPrimeObject(source[key]) && isPrimeObject(target[key])) {
      merge(target[key], source[key]);
    }
  }
  return target as DeepMerge<T, S>;
};

/**
 * 深度获取属性值
 * @param target 目标对象
 * @param path 路径
 * @param defaultValue 默认值
 */

export const get = <
  TObject extends Record<any, any>,
  TPath extends string,
  TDefailt
>(
  target: TObject,
  path: TPath,
  defaultValue?: TDefailt
): GetFieldDeep<TObject, TPath, TDefailt> => {
  const keys = toString(path).match(/([^.[\]]+)/g) || [];
  while (keys.length && target) {
    const key = keys.shift() || "";
    target = target[key];
  }
  return (target == null ? defaultValue : target) as GetFieldDeep<
    TObject,
    TPath,
    TDefailt
  >;
};

export const selector = get;
