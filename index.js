
import package from './package.json'
import * as obj from './libs/object' 
import * as arr from './libs/array' 
import * as fn from './libs/function' 
import * as url from './libs/url' 
import * as types from './libs/types' 
import * as num from './libs/number' 
import * as str from './libs/string' 
import * as date from './libs/date' 

import './libs/prototype'

const utils = {
    ...obj,
    ...arr,
    ...fn,
    ...url,
    ...types, 
    ...num,
    ...str,
    ...date,
    version:package.version,
}



window.utils = utils

export default utils
