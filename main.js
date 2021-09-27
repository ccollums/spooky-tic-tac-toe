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
var winner = document.getElementById('winnerMessage');
var player1Wins = document.getElementById('playerOneWins');
var player2Wins = document.getElementById('playerTwoWins');
var button = document.getElementById('clearWinsButton');

// EventListeners
window.addEventListener('load', onPageLoad);
gameBoard.addEventListener('click', placeToken);
button.addEventListener('click', deleteWins);

function onPageLoad() {
  if (localStorage.getItem("savedWins1") || localStorage.getItem("savedWins2")) {
  game.player1.retrieveWinsFromStorage();
  game.player2.retrieveWinsFromStorage();
  playerOneWinsDisplayed();
  playerTwoWinsDisplayed();
}
}

function deleteWins() {
  game.player1.wins = 0;
  game.player2.wins = 0;
  localStorage.removeItem('savedWins1');
  localStorage.removeItem('savedWins2');
  playerOneWinsDisplayed();
  playerTwoWinsDisplayed();
}

function placeToken(event) {
  if (event.target.classList.contains('1')) {
    playerboardToSave(1);
    onClickOfbox();
  } else if (event.target.classList.contains('2')) {
    playerboardToSave(2);
    onClickOfbox();
  } else if (event.target.classList.contains('3')) {
    playerboardToSave(3);
    onClickOfbox();
  } else if (event.target.classList.contains('4')) {
    playerboardToSave(4);
    onClickOfbox();
  } else if (event.target.classList.contains('5')) {
    playerboardToSave(5);
    onClickOfbox();
  } else if (event.target.classList.contains('6')) {
    playerboardToSave(6);
    onClickOfbox();
  } else if (event.target.classList.contains('7')) {
    playerboardToSave(7);
    onClickOfbox();
  } else if (event.target.classList.contains('8')) {
    playerboardToSave(8);
    onClickOfbox();
  } else if (event.target.classList.contains('9')) {
    playerboardToSave(9);
    onClickOfbox();
  }
}

function checkForToken() {
  var addToThisBox = event.target.closest('.box');
  if (addToThisBox.innerHTML != '') {
    event.preventDefault();
  } else {
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
  if (game.turn === game.player1 && !game.boardPlayer2.includes(boxNumber) && !game.boardPlayer1.includes(boxNumber)) {
    game.boardPlayer1.push(boxNumber)
  } else if (game.turn === game.player2 && !game.boardPlayer1.includes(boxNumber) && !game.boardPlayer2.includes(boxNumber)) {
    game.boardPlayer2.push(boxNumber)
  }
}

function stopAbilityToKeepPlaying() {
  if (game.winner === game.player1 || game.winner === game.player2) {
  }
}

function emptyBoard() {
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

function clearGameData() {
  game.turn = game.player1;
  game.boardPlayer1 = [];
  game.boardPlayer2 = [];
  game.isAWin = false;
  game.draw = false;
  game.winner = null;
}

function clearBoard() {
  if (game.draw === true || game.winner === game.player1 || game.winner === game.player2) {
    setTimeout(emptyBoard, 1000);
    clearGameData();
  }
}

function clearMessage() {
  winner.innerText = `It's 🎃's turn!`;
}

function updateTurnMessage() {
  if (game.draw) {
    winner.innerText = `It's a draw!`
    setTimeout(clearMessage, 1000);
  } else if (!game.draw) {
    winner.innerText = `It's ${game.turn.token}'s turn!`
  }
}

function updateWinnerOnPage() {
    if (game.winner === game.player1) {
      winner.innerText = `${game.player1.token} won!`
      setTimeout(clearMessage, 1000);
    } else if (game.winner === game.player2) {
      winner.innerHTML = `${game.player2.token} won!`;
      setTimeout(clearMessage, 1000);
    }
  }

function playerOneWinsDisplayed() {
  player1Wins.innerText = `${game.player1.wins} wins`;
}


function playerTwoWinsDisplayed() {
  player2Wins.innerText = `${game.player2.wins} wins`;
}


  function onClickOfbox() {
    game.checkForWinner();
    stopAbilityToKeepPlaying()
    checkForToken();
    playerOneWinsDisplayed();
    playerTwoWinsDisplayed();
    updateTurnMessage();
    updateWinnerOnPage();
    clearBoard();
  }
