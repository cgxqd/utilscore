import { Memoizify } from "../typings";

/**
 * 函数缓存
 * @param func 缓存目标函数
 * @param resolver
 * @returns 目标函数结果
 */
export function memoize<U extends Memoizify<U>>(
  this: any,
  func: U,
  resolver?: () => void
): Memoizify<U> {
  const memoizify = (...args: any) => {
    const key = resolver ? resolver.apply(this, args) : args[0];
    const cache = memoizify.cache;
    if (cache.has(key)) return cache.get(key);
    const result = func.apply(this, args);
    memoizify.cache = cache.set(key, result) || cache;
    return result;
  };
  memoizify.cache = new Map();
  return memoizify as Memoizify<U>;
}

/**
 * queryVar 查找变量值
 * @param condition 查询函数
 * @param delay 查询轮询时间
 */
export const queryVar = async <Resolve>(
  condition: () => Resolve,
  delay = 1000
): Promise<Resolve> => {
  while (!condition()) {
    await sleep(delay);
  }
  return condition();
};

/**
 * sleep 休眠
 * @param delay 休眠时间
 */
export const sleep = (delay: number): Promise<NodeJS.Timeout> =>
  new Promise(resolve => {
    const timer = setTimeout(() => {
      clearTimeout(timer);
      resolve(timer);
    }, delay);
  });

/**
 * 函数防抖
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 * @param immediate 是否立即调用，默认false
 */
export const debounce = (
  fn: (...args: any[]) => void,
  delay: number,
  immediate = false
) => {
  let timer: NodeJS.Timeout;
  let status = true;
  if (!immediate)
    return function (this: any, ...args: any[]) {
      if (timer) clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  else
    return function (this: any, ...args: any[]) {
      clearTimeout(timer);
      if (status) {
        status = false;
        fn.apply(this, args);
      }
      timer = setTimeout(() => (status = true), delay);
    };
};

/**
 * 函数防抖 (立即执行)
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 */
export const debounceStart = (fn: any, delay = 0) => debounce(fn, delay, true);

/**
 * 函数防抖 (非立即执行)
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 */
export const debounceEnd = (fn: any, delay = 0) => debounce(fn, delay, false);

/**
 * 函数节流
 * @param fn 函数
 * @param delay 延迟执行毫秒数
 */
export const throttle = (fn: (...args: any[]) => any, delay: number) => {
  let timer: NodeJS.Timeout | undefined;
  return function (this: any, ...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        clearTimeout(timer);
        timer = undefined;
        fn.apply(this, args);
      }, delay);
    }
  };
};
