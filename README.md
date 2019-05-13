# utilscoreJS


前端业务代码工具库（持续添加中）

> 目的：高效率完成前端业务代码

业务开发过程中，会经常用到`String,Number,Array,Object,Function,Date扩展方法`、`浏览器类型判断`等常用函数，为避免不同项目多次复制粘贴的麻烦，这里统一封装，并发布到npm，以提高开发效率。如果你也有常用的代码，欢迎为本项目提交star。

## 安装使用

1. 直接下载`dist`目录下的[index.js](https://github.com/cgxqd/utilscore/blob/master/dist/index.js)使用，支持UMD,CMD,AMD各模块化规范。
2. 使用npm/yarn/cnpm安装。

### 浏览器:
``` html
<script src="./node_modules/utilscore/dist/index.js"></script>
<!-- <script src="./dist/index.js"></script> -->
<script>
	let pwd = utilscore.mask('password:123456789',4);
	console.log('pwd:',pwd) // pwd: **************6789
</script>
```

### npm:
``` bash
$ npm i utilscore
```
### yarn:
``` bash
$ yarn add utilscore
```
### cnpm:
``` bash
$ cnpm i utilscore
```

React、VueJS,小程序等javascript环境

``` javascript
// 完整引入
import utilscore from 'utilscore'
let pwd = utilscore.mask('password:123456789',4);
console.log('pwd:',pwd) // pwd: **************6789
```

**推荐使用方法**

你真的不需要完整引入所有函数，所以只引入需要使用的方法即可。
``` javascript
import { mask } from 'utilscore'
let pwd = mask('password:123456789',4);
console.log('pwd:',pwd) // pwd: **************6789
```
## API文档

###  [Object](https://github.com/cgxqd/utilscore/blob/master/libs/object.js)
###  [Array](https://github.com/cgxqd/utilscore/blob/master/libs/array.js)
###  [Date](https://github.com/cgxqd/utilscore/blob/master/libs/date.js)
###  [Function](https://github.com/cgxqd/utilscore/blob/master/libs/function.js)
###  [String](https://github.com/cgxqd/utilscore/blob/master/libs/string.js)
###  [Number](https://github.com/cgxqd/utilscore/blob/master/libs/number.js)
###  [TypeOf](https://github.com/cgxqd/utilscore/blob/master/libs/types.js)
###  [url](https://github.com/cgxqd/utilscore/blob/master/libs/url.js)
###  [prototype](https://github.com/cgxqd/utilscore/blob/master/libs/prototype.js)

