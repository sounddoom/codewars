function ThenableDelay(ms) {
    let thens = [];
    let runThens = () => {
        let result = ms;
        for(let then of thens){
            result = then(result);
        }
    }
    this.then = function (callback) {
        thens.push(callback)
        console.log(thens)
        return this;
    }
    setTimeout(runThens,ms)
}
(new ThenableDelay(1000)).then(ms=>console.log('looks like delay',ms));
(new ThenableDelay(1000)).then(ms=>(console.log('looks like delay',ms),'result'));
async function checkThenable(){
	console.log(1)
	await new ThenableDelay(1000)
	console.log(2)
	await new ThenableDelay(2000)
	console.log(3)
}