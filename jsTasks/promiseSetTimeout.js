let delay = ms =>new Promise(r => setTimeout(()=>r(ms),ms));
delay(1000).then(ms=>console.log(ms))

async function breakable(){
    console.log('start')
    await delay(1000)
    console.log('end')
    return 'result'
}
console.log('befor')
let result = breakable()
console.log(result)
console.log('after')
result.then(result => console.log('breakable resolved',result))

async function breakable(){
    console.log('start')
    let result = await delay(1000)
    console.log('mid',result)
    let result2 = await delay(2000)
    await delay(1000)
    console.log('end')
    return 'result'
}