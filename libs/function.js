/**
 * 函数节流(首次执行)
 * @param {*} fn 
 * @param {*} delay 
 * @param {*} type 
 */
export const  throttleOnce = function (fn,delay=3000){

	let timer = null;
	let status = true;
	clearTimeout(timer);
	if(status){
		status = false;
		fn.call(this,arguments);
	}
	timer = setTimeout(()=>status = true, delay);
}

