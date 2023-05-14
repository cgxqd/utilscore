import { toString } from "../_/convert";
/**
 * 数据脱敏处理
 * @param value 目标字符串
 * @param startIndex 起始处的索引
 * @param endIndex 终止处的索引
 * @param symbol 替换的字符串，默认为*
 */
export const sensitive = (
  value: string,
  startIndex: number,
  endIndex: number,
  symbol = "*"
): string => {
  const reg = new RegExp(
    `^(.{${startIndex}})(.{${endIndex - startIndex}})(.${
      endIndex >= value.length ? "?" : "+"
    })$`
  );
  return value.replace(
    reg,
    ($0, $1, $2, $3) => $1 + $2.replace(/./g, symbol) + $3
  );
};

export const mask = sensitive;

/**
 * 从位置左边开始对数据脱敏处理
 * @param value 目标字符串
 * @param index 索引（从左边开始）
 * @param symbol 替换的字符串，默认为*
 */
export const sensitiveLeft = (value = "", index = 0, symbol = "*") =>
  sensitive(value, 0, index, symbol);

export const maskLeft = sensitiveLeft;

/**
 * 从位置右边开始对数据脱敏处理
 * @param value 目标字符串
 * @param index 索引（从右边开始）
 * @param symbol 替换的字符串，默认为*
 */
export const sensitiveRight = (value = "", index = 0, symbol = "*") => {
  const strL = value.length;
  return sensitive(value, index > strL ? 0 : strL - index, strL, symbol);
};

export const maskRight = sensitiveRight;

/**
 * 全局唯一标识符 UUID
 * @param len 长度
 * @param radix 基数(默认：62)
 */
export const uuid = (len: number, radix: number) => {
  const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
  const uuid = [];
  let i = 0;
  radix = radix || chars.length;

  if (len) {
    // Compact form
    for (i = 0; i < len; i++) uuid[i] = chars[0 | (Math.random() * radix)];
  } else {
    // rfc4122, version 4 form
    let r;

    // rfc4122 requires these characters
    uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
    uuid[14] = "4";

    // Fill in random data.  At i==19 set the high bits of clock sequence as
    // per rfc4122, sec. 4.1.5
    for (i = 0; i < 36; i++) {
      if (!uuid[i]) {
        r = 0 | (Math.random() * 16);
        uuid[i] = chars[i == 19 ? (r & 0x3) | 0x8 : r];
      }
    }
  }

  return uuid.join("");
};

/**
 * 128位的数字标识符
 */
export const guid = () => {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
};

/**
 * 将数值转化为千分位格式
 * @param value 数值
 * @param symbol 前缀符号
 */
export const toThousands = (value: string | number, symbol = "") =>
  toString(value)
    .replace(/(?=\B)(?=(\d{3})+\.)/g, ",")
    .replace(/^/, symbol);

/**
 * 去除开头结尾空格
 * @param {string} value
 * @returns
 */
export const trim = (value: string) =>
  toString(value).replace(/^\s+|\s+$/g, "");
