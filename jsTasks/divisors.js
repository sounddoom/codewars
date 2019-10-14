function divisors(integer) {
    var result = [];
    for (let i = 2; i < integer; i++) {
        (integer%i==0)&&(result.push(i))
    }
    if(result.length>0){
        return result;
    }else{
        return integer+" is prime"
    }
};
