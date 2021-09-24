var game = new Game();

// QuerySelectors
var gameBoard = document.getElementById('gameBoard');

// EventListeners
gameBoard.addEventListener('click', placeToken);



function placeToken(event) {
  if (event.target.classList.contains('1')) {
    playerboardToSave(1);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('2')) {
    playerboardToSave(2);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('3')) {
    playerboardToSave(3);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('4')) {
    playerboardToSave(4);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('5')) {
    playerboardToSave(5);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('6')) {
    playerboardToSave(6);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('7')) {
    playerboardToSave(7);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('8')) {
    playerboardToSave(8);
    game.checkForWinner();
    tokenToBePlaced();
  } else if (event.target.classList.contains('9')) {
    playerboardToSave(9);
    game.checkForWinner();
    tokenToBePlaced();
  }
}

function tokenToBePlaced() {
  var addToThisBox = event.target.closest('.box');
  if (game.turn === game.player1) {
    addToThisBox.innerHTML += `<h1 class='token'>🎃</h1>`
  } else if (game.turn === game.player2) {
    addToThisBox.innerHTML += `<h1 class='token'>👻</h1>`
  }
  game.switchTurns();
}

function playerboardToSave(boxNumber) {
  if (game.turn === game.player1) {
    game.boardPlayer1.push(boxNumber)
  } else if (game.turn === game.player2) {
    game.boardPlayer2.push(boxNumber)
  }
}
