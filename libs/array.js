/**
 * 根据属性去重数组
 * @param {array} arr 去重的数组
 * @param {string} key 去重的key
 * @example unique([{name:'1111'},{name:'1111'},{name:'222'},{name:'333'}],'name') => [{name:'1111'},{name:'222'},{name:'333'}
 */
export const uniqueBy = function(arr,key){
    return arr.filter((element,index,array)=>array.findIndex(row=>row[key]===element[key]) === index)
}


/**
 * 普通数组去重
 * @param {array} arr 去重的数组
 * @example unique2([1,2,2,3,4,3,4,7]) => [1, 2, 3, 4, 7]
 */
export const unique = (arr) =>
    arr.filter((element,index,array)=>array.indexOf(element) === index)