var game = new Game();

// QuerySelectors
var gameBoard = document.getElementById('gameBoard');
var box1 = document.getElementById('boxOne');
var box2 = document.getElementById('boxTwo');
var box3 = document.getElementById('boxThree');
var box4 = document.getElementById('boxFour');
var box5 = document.getElementById('boxFive');
var box6 = document.getElementById('boxSix');
var box7 = document.getElementById('boxSeven');
var box8 = document.getElementById('boxEight');
var box9 = document.getElementById('boxNine');

// EventListeners
gameBoard.addEventListener('click', placeToken);



function placeToken(event) {
  if (event.target.classList.contains('1')) {
    playerboardToSave(1);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('2')) {
    playerboardToSave(2);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('3')) {
    playerboardToSave(3);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('4')) {
    playerboardToSave(4);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('5')) {
    playerboardToSave(5);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('6')) {
    playerboardToSave(6);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('7')) {
    playerboardToSave(7);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('8')) {
    playerboardToSave(8);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
    tokenToBePlaced();
  } else if (event.target.classList.contains('9')) {
    playerboardToSave(9);
    game.checkForWinner();
    // stopGameBoard();
    clearBoard();
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

function emptyBoard() {
  console.log('hi')
  box1.innerHTML = ``;
  box2.innerHTML = ``;
  box3.innerHTML = ``;
  box4.innerHTML = ``;
  box5.innerHTML = ``;
  box6.innerHTML = ``;
  box7.innerHTML = ``;
  box8.innerHTML = ``;
  box9.innerHTML = ``;
}

function clearBoard() {
  if (game.draw === true || game.winner === game.player1 || game.winner === game.player2) {
    setTimeout(emptyBoard, 500);
    game.boardPlayer1 = [];
    game.boardPlayer2 = [];
    game.isAWin = false;
    game.draw = false;
    game.winner = null;
    game.turn = game.player1;
  }
}
//
// function stopGameBoard() {
//   console.log(game.winner)
//   if (game.winner === game.player1 || game.winner === game.player2) {
//     setTimeout(function() {console.log('hi')}, 500);
//   }
// }
