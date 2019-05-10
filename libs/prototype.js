String.prototype.match_all = function(reg){
	var arr = []
	var str = this;
	var s = '';
	while ((s = reg.exec(str)) != null) {
		arr.push(s[1])
	} 
	return arr
}	
