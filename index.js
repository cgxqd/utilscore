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
import './libs/prototype'

let root = typeof window !== 'undefined' ? window : global
root.parcelRequire = ((modules, cache, entry, globalName) => {
    var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
})

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
    version:version,
}

root.utilscore = utilscore

for(let key in utilscore){
	exports[key] = utilscore[key]
}


