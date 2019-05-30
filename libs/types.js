
/**
 * 判断类型Null
 * @param {any} value 
 */
export const isNull = value => Object.prototype.toString.call(value) == "[object Null]"

/**
 * 判断类型Undefined 
 * @param {any} value 
 */
export const isUndefined = value => value === void 0

/**
 * 判断类型Boolean
 * @param {any} value 
 */
export const isBoolean = value => typeof(value) === 'boolean'

/**
 * 判断类型Number
 * @param {any} value 
 */
export const isNumber = value => typeof(value) === 'number'

/**
 * 判断类型String
 * @param {any} value 
 */
export const isString = value => typeof(value) === 'string'

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

/**
 * 获取数据类型
 * @param {any} value
 * @example utilscore.getType(null) // => "null"
 */
export const getType = (value) => Object.prototype.toString.call(value).match(/\s([a-z]+)/i)[1].toLocaleLowerCase()