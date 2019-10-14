function call(ms){
	return new Promise(r=>setTimeout(r ,ms))
}
async function hello(){
	await call(500)
	return 'hello'
}
async function foo(){
	await call(500)
	throw new Error();
}