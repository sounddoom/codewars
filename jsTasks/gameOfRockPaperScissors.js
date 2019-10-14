var userData = prompt('Do you choose rock, paper or scissors?');
function game() {
    const gameElements = ['rock', 'paper', 'scissors']
    let gameData;
    gameData = Math.random();
    if (gameData <= (1 / 3)) {
        gameData = 'rock';
    } else if (gameData > (1 / 3) && gameData <= (2 / 3)) {
        gameData = 'scissors';
    } else {
        gameData = 'paper';
    };
    if (userData === gameElements[0]) {
        if (gameData === gameElements[0]) {
            alert('draw')
        } else if (gameData === gameElements[1]) {
            alert('you lose')
        } else {
            alert('you won')
        }
    } else if (userData === gameElements[1]) {
        if (gameData === gameElements[1]) {
            alert('draw')
        } else if (gameData === gameElements[2]) {
            alert('you lose')
        } else {
            alert('you won')
        }
    } else if (userData === gameElements[2]) {
        if (gameData === gameElements[2]) {
            alert('draw')
        } else if (gameData === gameElements[0]) {
            alert('you lose')
        } else {
            alert('you won')
        }
    }

}
game();