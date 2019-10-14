var ration = {
    usd: 28,
    euro: 31.7,
    rub: 0.41,
    gbp: 35.86,
    uah: 1
}
function currencyCalc(amoutOfMoney,firstCurrency,secondCurrency){
    let total,symbol;
    firstCurrency = firstCurrency.toLowerCase();
    secondCurrency = secondCurrency.toLowerCase();
    for (let key in ration){
    if (firstCurrency=='usd') {
                	
        } else if (firstCurrency=='euro'){
            total = amoutOfMoney/ration['euro'];
            symbol = '€';
        } else if (firstCurrency=='rub'){
            total = amoutOfMoney/ration['rub'];
            symbol = '₽';
        } else if (firstCurrency=='gbp'){
            total = amoutOfMoney/ration['gbp'];
            symbol = '£';
        }else{
            console.log('error')
        }
    }
    return total.toFixed(2) + symbol;
}
currencyCalc(10000,'EURO');