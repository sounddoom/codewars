var userData = prompt('Do you choose rock, paper or scissors?');
function game() {
    const gameElements = ['rock', 'paper', 'scissors']
    let gameData,resultData;
    gameData = Math.random();
    if (gameData <= (1 / 3)) {
        gameData = 'rock';
    } else if (gameData > (1 / 3) && gameData <= (2 / 3)) {
        gameData = 'scissors';
    } else {
        gameData = 'paper';
    };
    return gameData;
    compareData(userData, gameData, gameElements);

}

function compareData(userData, gameData, arrGameElements) {
    switch (userData) {
        case arrGameElements[0]:л
            if (gameData === arrGameElements[0]) {
                resultData = 'draw'
            } else if (gameData === arrGameElements[1]) {
                resultData = 'you lose'
            } else {
                resultData = 'you won'
            };
            break;
        case arrGameElements[1]:
            if (gameData === arrGameElements[1]) {
                resultData = 'draw'
            } else if (gameData === arrGameElements[2]) {
                resultData = 'you lose'
            } else {
                alert('you won')
            };
            break;
        case arrGameElements[2]:
            if (gameData === arrGameElements[2]) {
                resultData = 'draw'
            } else if (gameData === arrGameElements[0]) {
                resultData = 'you lose'
            } else {
                resultData = 'you won'
            };
            break;
        default:
        console.log('error')
            break;
    }
}
game();