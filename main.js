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
var gameMessage = document.getElementById('gameMessage');
var player1Wins = document.getElementById('playerOneWins');
var player2Wins = document.getElementById('playerTwoWins');
var button = document.getElementById('clearWinsButton');

// EventListeners
window.addEventListener('load', onPageLoad);
gameBoard.addEventListener('click', playGame);
button.addEventListener('click', clearWinsForPlayers);

function onPageLoad() {
  if (localStorage.getItem("playerOneSavedWins") || localStorage.getItem("playerTwoSavedWins")) {
    game.player1.retrieveWinsFromStorage();
    game.player2.retrieveWinsFromStorage();
    displayPlayerOneWins();
    displayPlayerTwoWins();
  }
}

function clearWinsForPlayers() {
  game.player1.wins = 0;
  game.player2.wins = 0;
  localStorage.removeItem('playerOneSavedWins');
  localStorage.removeItem('playerTwoSavedWins');
  displayPlayerOneWins();
  displayPlayerTwoWins();
}

function playGame(event) {
  if (event.target.classList.contains('1')) {
    saveBoxToPlayerGameBoard(1);
    onClickOfbox();
  } else if (event.target.classList.contains('2')) {
    saveBoxToPlayerGameBoard(2);
    onClickOfbox();
  } else if (event.target.classList.contains('3')) {
    saveBoxToPlayerGameBoard(3);
    onClickOfbox();
  } else if (event.target.classList.contains('4')) {
    saveBoxToPlayerGameBoard(4);
    onClickOfbox();
  } else if (event.target.classList.contains('5')) {
    saveBoxToPlayerGameBoard(5);
    onClickOfbox();
  } else if (event.target.classList.contains('6')) {
    saveBoxToPlayerGameBoard(6);
    onClickOfbox();
  } else if (event.target.classList.contains('7')) {
    saveBoxToPlayerGameBoard(7);
    onClickOfbox();
  } else if (event.target.classList.contains('8')) {
    saveBoxToPlayerGameBoard(8);
    onClickOfbox();
  } else if (event.target.classList.contains('9')) {
    saveBoxToPlayerGameBoard(9);
    onClickOfbox();
  }
}

function checkForExistingToken() {
  var selectedBox = event.target.closest('.box');
  if (selectedBox.innerHTML != '') {
    event.preventDefault();
  } else if (game.isAWin) {
    assignTokenToBePlaced();
    disableBoxes();
  } else {
    assignTokenToBePlaced();
  }
}

function assignTokenToBePlaced() {
  var selectedBox = event.target.closest('.box');
  if (game.turn === game.player1) {
    selectedBox.innerHTML += `<h1 class='token'>🎃</h1>`
  } else if (game.turn === game.player2) {
    selectedBox.innerHTML += `<h1 class='token'>👻</h1>`
  }
  game.switchTurns();
}

function updateTurnMessage() {
  if (game.draw) {
    gameMessage.innerText = `It's a draw!`
    setTimeout(clearMessage, 750);
  } else if (!game.draw) {
    gameMessage.innerText = `It's ${game.turn.token}'s turn!`
  }
}

function updateWinnerOnPage() {
  if (game.winner === game.player1) {
      gameMessage.innerText = `${game.player1.token} won!`
      setTimeout(clearMessage, 750);
  } else if (game.winner === game.player2) {
      gameMessage.innerHTML = `${game.player2.token} won!`;
      setTimeout(clearMessage, 750);
  }
}

function saveBoxToPlayerGameBoard(boxNumber) {
  if (game.turn === game.player1 && !game.boardPlayer2.includes(boxNumber) && !game.boardPlayer1.includes(boxNumber)) {
    game.boardPlayer1.push(boxNumber)
  } else if (game.turn === game.player2 && !game.boardPlayer1.includes(boxNumber) && !game.boardPlayer2.includes(boxNumber)) {
    game.boardPlayer2.push(boxNumber)
  }
}

function disableBoxes() {
  gameBoard.classList.add('disabled');
}

function enableBoxes() {
  gameBoard.classList.remove('disabled');
}

function clearMessage() {
  gameMessage.innerText = `It's 🎃's turn!`;
}

function displayPlayerOneWins() {
  player1Wins.innerText = `${game.player1.wins} wins`;
}

function displayPlayerTwoWins() {
  player2Wins.innerText = `${game.player2.wins} wins`;
}

function clearGameBoard() {
  if (game.draw === true || game.winner === game.player1 || game.winner === game.player2) {
    setTimeout(emptyGameBoardBoxes, 750);
    game.clearGameData();
  }
}

function emptyGameBoardBoxes() {
  box1.innerHTML = ``;
  box2.innerHTML = ``;
  box3.innerHTML = ``;
  box4.innerHTML = ``;
  box5.innerHTML = ``;
  box6.innerHTML = ``;
  box7.innerHTML = ``;
  box8.innerHTML = ``;
  box9.innerHTML = ``;
  enableBoxes();
}

function onClickOfbox() {
  game.checkForWinner();
  checkForExistingToken();
  displayPlayerOneWins();
  displayPlayerTwoWins();
  updateTurnMessage();
  updateWinnerOnPage();
  clearGameBoard();
}
