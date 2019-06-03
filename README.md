# [utilscoreJS](https://github.com/cgxqd/utilscore)

前端业务代码工具库(**不定时更新**)


> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`String,Number,Array,Object,Function,Date扩展方法`、`浏览器类型判断`、`base64`、`表单验证`、`url常用方法`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交pr.

## 安装使用

1. 直接下载`dist`目录下的[index.js](https://github.com/cgxqd/utilscore/blob/master/dist/index.js)使用,支持UMD,CommonJS,ES6各模块化规范。
2. 使用npm/yarn/cnpm安装,支持CommonJS,ES6各模块化规范。

### 浏览器:
``` html
<script src="./node_modules/utilscore/dist/index.js"></script>
<!-- <script src="./dist/index.js"></script> -->
<script>
	let txt = utilscore.mask('12398765432',3,7) 
	console.log(txt) // => "123****5432"
</script>
```

### npm
``` bash
$ npm i utilscore
```
### yarn
``` bash
$ yarn add utilscore
```
### cnpm
``` bash
$ cnpm i utilscore
```

React、VueJS,小程序等javascript环境

``` javascript
// 完整引入
import utilscore from 'utilscore' // 或 import utilscore from 'utilscore/dist/index.js'
let txt = utilscore.mask('12398765432',3,7) 
console.log(txt) // => "123****5432"
```

**推荐使用方法**

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
import { mask } from 'utilscore' // 或 import { mask } from 'utilscore/dist/index.js'
let txt = mask('12398765432',3,7) 
console.log(txt) // => "123****5432"
```
## :package:  API文档

> ###  [Object](https://github.com/cgxqd/utilscore/blob/master/libs/object.js)

- deepClone 深度克隆。
- orderBy 	返回按属性(props)和顺序(orders)排序的对象数组,用于数据排序。
- findPathByLeafId 根据 key 递归查找链带关系。
- merge 对象合并

> ###  [Array](https://github.com/cgxqd/utilscore/blob/master/libs/array.js)

- uniqueBy 	根据属性去重数组。
- unique	普通数组去重。
- maxNumBy 	找出数组中该属性最大值的一列。
- minNumBy 	找出数组中该属性最小值的一列。
- maxNum 	数组中的最大值。
- mixNum 	数组中的最小值。
- shuffle 	将数组打乱

> ###  [Date](https://github.com/cgxqd/utilscore/blob/master/libs/date.js)

- formatTime 格式化时间。
- formatHMS 将秒数转为 xx小时xx分钟xx秒 例如1h0m10s。

> ###  [Function](https://github.com/cgxqd/utilscore/blob/master/libs/function.js)

- debounceStart 函数防抖 (立即执行版)。
- debounceEnd 函数防抖 (非立即执行版)。
- debounce 函数防抖 (完全版)。
- throttle 函数节流

> ###  [String](https://github.com/cgxqd/utilscore/blob/master/libs/string.js)

- mask 根据位置,使用 * 遮蔽字符串。
- maskLeft 从位置左边开始，使用 * 遮蔽字符串。
- maskRight 从位置右边开始，使用 * 遮蔽字符串。
- randomHexColorCode 生成一个随机的十六进制颜色代码。
- getCounts 返回元素出现的次数。
- uuid 全局唯一标识符 UUID
- guid GUID:128位的数字标识符

> ###  [Number](https://github.com/cgxqd/utilscore/blob/master/libs/number.js)

- randomNum 返回指定范围内的随机整数。
- round 将数字四舍五入到指定的小数位数。
- sum 返回两个或两个以上数字/数字数组中元素之和。
- sumBy 根据函数映射每个元素，然后返回数组的和。
- toDecimalMark 将数字转化为千分位格式，将数字转化为千分位格式,可以在数字前面加上符号。
- addNum 加法运算,可浮点安全运算。 
- subNum 减法运算,可浮点安全运算。
- mulNum 乘法运算,可浮点安全运算。
- divNum 除法运算,可浮点安全运算。
- getrandom 产生n个随机数,并且随机数之和是固定值

> ###  [TypeOf](https://github.com/cgxqd/utilscore/blob/master/libs/types.js)

- isNull 判断类型Null。
- isUndefined 判断类型Undefined。
- isBoolean 判断类型Boolean。
- isNumber 判断类型Number。
- isString 判断类型String。
- isSymbol 判断类型Symbol。
- isObject 判断类型Object。
- isRegExp 判断类型RegExp。
- isArray 判断类型Array。
- isFunction 判断类型Function。
- getType 获取类型，全能型的typeOf。

> ###  [url](https://github.com/cgxqd/utilscore/blob/master/libs/url.js)

- insertUrl 根据对象中的参数匹配插入到url中。
- URLSearchParams url 序列化和反序列化。
- Url 返回网址的相关信息，模拟了 浏览器的 new URL(urlString) 部分功能

> ###  [validator](https://github.com/cgxqd/utilscore/blob/master/libs/graceChecker.js)

- graceChecker 表单验证。

> ###  [base64](https://github.com/cgxqd/utilscore/blob/master/libs/base64.js)

- encode base64加密。
- decode base64解密。

> ###  [prototype](https://github.com/cgxqd/utilscore/blob/master/libs/prototype.js)

- match_all 扩展 String 的原型方法 es10 的 matchAll（未兼容浏览器）。
- fromEntries 扩展 es10 的 Object.fromEntries() 
- entries 扩展 es 的 Object.entries() 

