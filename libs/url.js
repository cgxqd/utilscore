/**
 * 请求参数
 * @param {*} url 
 * @param {*} options 
 */
export const Url = (url, options={})=>{
	return url.replace(/:([a-zA-Z0-9_]{1,})/g,($0,$1)=>{
		let val = encodeURIComponent(options[$1]);
		if(val === undefined){
			new Error(`URL ${url} not find ${$1}`);
		}
		return  val;
	})
}
	