function string(){
	debugger
	let dot='.';
	let hesh='#';
	let string='';
	let result=dot;
	for (let i=0,n=i;i<11;i++){
		(((hesh && i==5) && (string=string+hesh)) ||(string=string + result))
		
    }
	return string;
}
string();