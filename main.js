var game = new Game();

// QuerySelectors
var gameBoard = document.getElementById('gameBoard');
var box1 = document.querySelector('.box1');
var box2 = document.querySelector('.box2');
var box3 = document.querySelector('.box3');
var box4 = document.querySelector('.box4');
var box5 = document.querySelector('.box5');
var box6 = document.querySelector('.box6');
var box7 = document.querySelector('.box7');
var box8 = document.querySelector('.box8');
var box9 = document.querySelector('.box9');
// EventListeners
gameBoard.addEventListener('click', placeToken);



function placeToken(event) {
  if (event.target.classList.contains('1')) {
    console.log(1);
    tokenToBePlaced();
  } else if (event.target.classList.contains('2')) {
    console.log(2);
    tokenToBePlaced();
  } else if (event.target.classList.contains('3')) {
    console.log(3);
    tokenToBePlaced();
  } else if (event.target.classList.contains('4')) {
    console.log(4);
    tokenToBePlaced();
  } else if (event.target.classList.contains('5')) {
    console.log(5);
    tokenToBePlaced();
  } else if (event.target.classList.contains('6')) {
    console.log(6);
    tokenToBePlaced();
  } else if (event.target.classList.contains('7')) {
    console.log(7);
    tokenToBePlaced();
  } else if (event.target.classList.contains('8')) {
    console.log(8);
    tokenToBePlaced();
  } else if (event.target.classList.contains('9')) {
    console.log(9);
    tokenToBePlaced();
  }
}

function tokenToBePlaced(boxNumber) {
  var addToThisBox = event.target.closest('.box');
  game.switchTurns();
  if (game.turn === game.player1) {
    addToThisBox.innerHTML += `<h1 class='token'>🎃</h1>`
  } else if (game.turn === game.player2) {
    addToThisBox.innerHTML += `<h1 class='token'>👻</h1>`
  }
}
