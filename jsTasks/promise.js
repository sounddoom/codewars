function runTeapot(){ //запуск чайника, операция синхронная. Однако возвращается Promise, который свершится по факту закипания
    console.log('TEA: run teapot')
    let seconds = (45 + (Math.random()*255))
    return new Promise(r => setTimeout(() => r(seconds), seconds*100))
}

function prepareCup(){ //синхронная функция подготовки чашки. 
    console.log('TEA: prepare tea cup');
}

function fillCupWithWater(){ //синхронная функция заливания кипятка в чашку.
    console.log('TEA: fill cup with water');
}

async function prepareTea(){ //асинхронная функция приготовления чая.
    let teapotPromise = runTeapot(); //нажимаем кнопку и получаем промис кипятка
    prepareCup(); //сыпем заварку в чашку, чайник тем временем греется
    let boiledWater   = await teapotPromise; //функция приостонавливается пока чайник не закипит. В это время можно заниматься другими делами
    fillCupWithWater(boiledWater); //Заливаем кипяток
    return 'TEA: Tea Ready' //Возвращаем строку о готовности чая
}



function preparePlate(){ //льем суп в тарелку
    console.log('SOUP: prepare plate...');
}
 
function movePlateToOven(){ //ставим тарелку в микроволновку
    console.log('SOUP: to oven...');
}

function movePlateFromOvenToTable(){ //ставим тарелку на стол
    console.log('SOUP: plate from oven to table...');
}

function runOven(seconds){ //включение микроволновки, функция возвращает Promise о окончании нагревания через seconds секунд
    console.log('SOUP: run oven')
    return new Promise(r => setTimeout(() => r(seconds), seconds*100))
}

async function prepareSoup(){ //асинхронная функция приготовления супа
    preparePlate() //суп в тарелку
    movePlateToOven() //тарелку в печку
    let hotPlate = await runOven(2 * 60); //функция прерывается на работу печи 2 минуты. В это время может "разморозится" готовка чая, например
    movePlateFromOvenToTable(hotPlate) //ставим на стол.
    return 'Soup Ready';
}

async function makeDinner(){
let soupPromise = prepareSoup();
console.log('soup' , soupPromise);

let teaPromise  = prepareTea();
console.log('tea', teaPromise)

return await Promise.all([soupPromise,teaPromise])
}

makeDinner().then(results => console.log(results) )