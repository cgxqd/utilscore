/**
 * 根据属性去重数组
 * @param {array} arr 去重的数组
 * @param {string} key 去重的key
 * @example utilscore.uniqueBy([{name:'1111'},{name:'1111'},{name:'222'},{name:'333'}],'name') => [{name:'1111'},{name:'222'},{name:'333'}
 */
export const uniqueBy = function(arr,key){
    return arr.filter((element,index,array)=>array.findIndex(row=>row[key]===element[key]) === index)
}


/**
 * 普通数组去重
 * @param {array} arr 去重的数组
 * @example utilscore.unique([1,2,2,3,4,3,4,7]) => [1, 2, 3, 4, 7]
 */
export const unique = (arr) =>
    arr.filter((element,index,array)=>array.indexOf(element) === index)


/**
 * 找出数组中该属性最大值的一列
 * @param {array} arr 
 * @param {string} key  
 */    
export const maxNumBy = (arr,key) => 
    arr.find(item => item[key]===Math.max.apply(Math,arr.map(row=>row[key])))


/**
 * 找出数组中该属性最小值的一列
 * @param {array} arr 
 * @param {string} key  
 */    
export const minNumBy = (arr,key) => 
    arr.find(item => item[key]===Math.min.apply(Math,arr.map(row=>row[key])))   


/**
 * 数组中的最大值
 * @param {array} arr 
 */    
export const maxNum = (arr) => 
    Math.max.apply(Math,arr)


/**
 * 数组中的最小值
 * @param {array} arr 
 */    
export const minNum = (arr) => 
    Math.min.apply(Math,arr)
