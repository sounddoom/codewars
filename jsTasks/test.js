var ration = {
    usd: 28,
    euro: 31.7,
    rub: 0.41,
    gbp: 35.86
}
function currencyCalc(amoutOfMoney,currency){
    let total,symbol;
    currency = currency.toLowerCase();
    if (currency=='usd') {
        total = amoutOfMoney/ration['usd'];
        symbol = '$';	
    } else if (currency=='euro'){
        total = amoutOfMoney/ration['euro'];
        symbol = '€';
    } else if (currency=='rub'){
        total = amoutOfMoney/ration['rub'];
        symbol = '₽';
    } else if (currency=='gbp'){
        total = amoutOfMoney/ration['gbp'];
        symbol = '£';
    }else{
        console.log('error')
    }
    return total.toFixed(2) + symbol;
}
currencyCalc(10000,'EURO');