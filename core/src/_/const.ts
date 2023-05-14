/** 数组安全长度 */
export const ARRAY_MAX_SAFE_INTEGER = 4294967296;

/** 最大数值 */
export const MAX_INTEGER = 1.7976931348623157e308;

/** 无穷数值 */
export const INFINITY = 1 / 0;

/** 用于各种Number类型的常量 */
export const NAN = 0 / 0;

/** 用于匹配前面或者后面的空白 */
export const reTrim = /^s+|s+$/g;

/** 用于检测错误的有符号十六进制字符串值 */
export const reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** 用于检测二进制字符串值 */
export const reIsBinary = /^0b[01]+$/i;

/** 用于检测八进制字符串值 */
export const reIsOctal = /^0o[0-7]+$/i;

/** 不依赖于root的内置方法引用 */
export const freeParseInt = parseInt;
