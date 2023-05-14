export { plus, minus, times, divide } from "number-precision";

/**
 * 指定范围(min <= value <= max)内的随机整数
 * @param min 最小值
 * @param max 最大值
 */
export const randomInteger = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1)) + min;

/**
 * 将数字四舍五入到指定的小数位数
 * @param value 数值
 * @param 精确到几位小数, 默认为 0
 */
export const round = (value: number, decimal = 0): number => {
  return Number(`${Math.round(Number(`${value}e${decimal}`))}e-${decimal}`);
};
