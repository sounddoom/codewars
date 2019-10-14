function hello(n){
    debugger
    return n= 'bob';
}
function callback(callback){
    debugger
    var name = 'nick';
    return callback(name)
}
console.log(callback(hello));
