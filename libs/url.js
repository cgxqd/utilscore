import { isObject, isString } from './types'
/**
 * 根据对象中的参数匹配插入到url中
 * @param {*} url 
 * @param {Object} options 
 * @example utilscore.insertUrl('http://www.baidu.com?:name',{name:'ceshi'}) // => http://www.baidu.com?ceshi
 */
export const insertUrl = (url, options = {}) => {
    return url.replace(/:([a-zA-Z0-9_]{1,})/g, ($0, $1) => {
        let val = encodeURIComponent(options[$1]);
        if (val === undefined) {
            new Error(`URL ${url} not find ${$1}`);
        }
        return val;
    })
}


/**
 * url 序列化和反序列化
 * @param {Object||String} param 
 * @example utilscore.URLSearchParams('https://www.baidu.com/s?ie=utf-8&f=8&rsv_bp=1&rsv_idx=1&tn=baidu&wd=parseQueryString&rsv_pq=8c7a6d0000146171&rsv_t=43d6RzTiyjUjUKtQtqfR3XL25JepKFwJYvvSpsj%2BJ7aFqxdBLDungY%2Bfx%2BE&rqlang=cn&rsv_enter=1&rsv_n=2&rsv_sug3=1') 
            // => 
            {
                "ie":"utf-8",
                "f":"8",
                "rsv_bp":"1",
                "rsv_idx":"1",
                "tn":"baidu",
                "wd":"parseQueryString",
                "rsv_pq":"8c7a6d0000146171",
                "rsv_t":"43d6RzTiyjUjUKtQtqfR3XL25JepKFwJYvvSpsj+J7aFqxdBLDungY+fx+E",
                "rqlang":"cn",
                "rsv_enter":"1",
                "rsv_n":"2",
                "rsv_sug3":"1"
            }
            utilscore.URLSearchParams({
                name:'cgx',
                test:'ceshi'
            })
            // => "name=cgx&test=ceshi"
 */

export const URLSearchParams = (param) => {
    if (isObject(param)) {
        return Object.keys(param).map(key => `${key}=${encodeURIComponent(JSON.stringify(param[key]))}`).join('&')
    } else if (isString(param)) {
        let maps = {};
        param.replace(/^.[^\?]*\?/g, '').split('&').forEach(res => {
            let row = decodeURIComponent(res).split('=');
            maps[row[0] + ''] = JSON.parse(decodeURIComponent(row[1]))
        });
        return maps
    }
}
