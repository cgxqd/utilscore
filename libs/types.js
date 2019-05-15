
/**
 * 判断类型Null
 * @param {any} value 
 */
export const isNull = value => Object.prototype.toString.call(value) == "[object Null]"

/**
 * 判断类型Undefined 
 * @param {any} value 
 */
export const isUndefined = value => Object.prototype.toString.call(value) == "[object Undefined]"

/**
 * 判断类型Boolean
 * @param {any} value 
 */
export const isBoolean = value => Object.prototype.toString.call(value) == "[object Boolean]"

/**
 * 判断类型Number
 * @param {any} value 
 */
export const isNumber = value => Object.prototype.toString.call(value) == "[object Number]"

/**
 * 判断类型String
 * @param {any} value 
 */
export const isString = value => Object.prototype.toString.call(value) == "[object String]"

/**
 * 判断类型Symbol
 * @param {any} value 
 */
export const isSymbol = value => Object.prototype.toString.call(value) == "[object Symbol]"

/**
 * 判断类型Object
 * @param {any} value 
 */
export const isObject = value => Object.prototype.toString.call(value) == "[object Object]"

/**
 * 判断类型RegExp
 * @param {any} value 
 */
export const isRegExp = value=> Object.prototype.toString.call(value) == "[object RegExp]"

/**
 * 判断类型Array
 * @param {any} value 
 */
export const isArray = value => Object.prototype.toString.call(value) == "[object Array]"

/**
 * 判断类型Function
 * @param {any} value 
 */
export const isFunction = value => Object.prototype.toString.call(value) == "[object Function]"