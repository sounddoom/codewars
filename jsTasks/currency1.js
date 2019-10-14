var ration = {
    usd: 28,
    euro: 31.7,
    rub: 0.41,
    gbp: 35.86
}
function currencyCalc(valueUAH, currency){
    let total;
    currency = currency.toLowerCase();
    switch (currency) {
        case 'usd':
            total = valueUAH/ration['usd'];
        break;
        case 'euro':
            total = valueUAH/ration['euro'];
        break;
        case 'rub':
            total = valueUAH/ration['rub'];
        break;
        case 'gbp':
            total = valueUAH/ration['gbp'];
        break;
        default:
        break;
    };
    return total.toFixed(2);
}
currencyCalc(10000,'EURO');