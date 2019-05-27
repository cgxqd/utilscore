String.prototype.match_all = function(reg){
	var arr = []
	var str = this;
	var s = '';
	while ((s = reg.exec(str)) != null) {
		arr.push(s[1])
	} 
	return arr
}	

Object.prototype.fromEntries = function(val){
	return val.reduce((prev,val)=>Object.assign(prev,{[val[0]]:val[1]}),{})
}
