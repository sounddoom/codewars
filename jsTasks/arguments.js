function add(a,b){
	debugger
	let result=0;
   for(i=0;i<arguments.length;i++){
    result += arguments[i];
	}
	 return result;
}
console.log(add(4,5,6))
console.log(add(4,5,6,7));