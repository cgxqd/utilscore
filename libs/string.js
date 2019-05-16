import { unique } from './array'
import { isArray, isString } from './types' 

/**
 * 使用 * 遮蔽字符串
 * @param {string} cc 
 * @param {number} num 
 * @param {string} mask 
 * @example utilscore.mask('45444a8wef8',3,'*') // => "********ef8"
 */
export const mask = (cc, num = 4, mask = '*') =>('' + cc).slice(0, -num).replace(/./g, mask) + ('' + cc).slice(-num)

/**
 * 生成一个随机的十六进制颜色代码
 */
export const randomHexColorCode = () => {
    let n = ((Math.random() * 0xfffff) | 0).toString(16);
    return '#' + (n.length !== 6 ? ((Math.random() * 0xf) | 0).toString(16) + n : n)
  }


/**
 * 返回元素出现的次数
 * @param {string} str 
 * @param {null|string,array} keys 
 * @example 1.不传参,获取全部
              utilscore.getCounts('asawdawf') // => {a: 3, s: 1, w: 2, d: 1, f: 1}
            2.传字符串  
              utilscore.getCounts('asasfdfasdasf','asf') // => {asf: 2}
            3.传数组
              utilscore.getCounts('asdfjl;qwoetuqwe*(^&&()_)*_23480*yoij)(ojilA4WE4',['we*(^&&()_)*','asdfjl','_23480','qw'])
              // => {we*(^&&()_)*: 1, asdfjl: 1, _23480: 1, qw: 2}
 */
export const getCounts = (str,keys=null) => {
  let arr = {}
  let keyMap = []
  let arrStr = str.split('')
  
  if(isArray(keys)) keyMap = unique(keys);
  else if(isString(keys)) keyMap = keys.split(' ')
  else keyMap = unique(arrStr)

  keyMap.map(key=>{
    
    //处理包含特殊字符
    var reg = new RegExp("\([`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？]\)",'g')
    let _key = key.replace(reg,'\\$1')

    let res = str.match(new RegExp(_key,'g'))
    
    arr[key] = res?(arr[key] = res.length):0
  })


	return arr
} 
