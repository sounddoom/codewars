var ration = {
    usd: 28,
    euro: 31.7,
    rub: 0.41,
    gbp: 35.86
}
var rationSymbol = {
    usd: '$',
    euro: '€',
    rub: '₽',
    gbp: '£'
}
function currencyCalc(amoutOfMoney,currency){
	debugger
    let total,symbol;
    currency = currency.toLowerCase();
    for (key in ration){
        ((currency===key) && (total = (amoutOfMoney/ration[key]).toFixed(2)+rationSymbol[key]))
    }
    return total;
}
currencyCalc(10000,'EURO');