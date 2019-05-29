/**
 * 返回指定范围内的随机整数。
 * @param {number} min 最小值
 * @param {number} max 最大值
 */
export const randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 将数字四舍五入到指定的小数位数。
 * @param {number} n 操作的数字
 * @param {number} decimals 精确到几位小数 
 */
export const round = (n, decimals = 0) => {
    return Number(`${Math.round(`${n}e${decimals}`)}e-${decimals}`)
}


/**
 * 返回两个或两个以上数字/数字数组中元素之和。
 * @param  {...any} arr 操作的数组 
 */
export const sum = (...arr) => [...arr].reduce((acc, val) => acc + val, 0);


/**
 * 根据函数映射每个元素，然后返回数组的和
 * @param {*} arr 
 * @param {*} fn 
 */
export const sumBy = (arr, fn) =>
  arr.map(typeof fn === 'function' ? fn : val => val[fn]).reduce((acc, val) => acc + val, 0);

/**
 * 将数字转化为千分位格式,可以在数字前面加上符号
 * @param {number|string} num 
 * @param {string} mark
 * @returns {string}
 */
export const toDecimalMark = (num,mark='') => num.toLocaleString('en-US').replace(/^/,mark);