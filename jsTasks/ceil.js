'use strict'
function sumArgs() {
    
    var arg = [].reduce.call(arguments,(ac,el)=>ac+=el)
    return arg

  }
  console.log(sumArgs(1, 2, 3))