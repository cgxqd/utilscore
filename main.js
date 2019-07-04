import {version} from './package.json'
import * as obj from './libs/object' 
import * as arr from './libs/array' 
import * as fn from './libs/function' 
import * as url from './libs/url' 
import * as types from './libs/types' 
import * as num from './libs/number' 
import * as str from './libs/string' 
import * as date from './libs/date'
import * as other from './libs/other'
import * as validator from './libs/validator'
import * as base64 from './libs/base64'
import * as event from './libs/event'
import * as web from './libs.web'

// 原型扩展需要自行添加
// import './libs/prototype'

var utilscore = {
    ...obj,
    ...arr,
    ...date,
    ...fn,
    ...str,
    ...num,
    ...types,
    ...url,
    ...other,
    ...validator,
    ...base64,
    ...event,
    ...web,
    version:version,
}

module.exports = utilscore


