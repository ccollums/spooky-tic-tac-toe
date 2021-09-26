class Game {
  constructor() {
  this.player1 = new Player(1, '🎃');
  this.player2 = new Player(2, '👻');
  this.turn = this.player1;
  this.boardPlayer1 = [];
  this.boardPlayer2 = [];
  this.isAWin = false;
  // this.wins = [];
  this.draw = false;
  this.winner = null;
  }

  switchTurns() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else if (this.turn === this.player2) {
      this.turn = this.player1;
    }
  }

  horizontalWins() {
    if (this.boardPlayer1.includes(1) && this.boardPlayer1.includes(2) && this.boardPlayer1.includes(3) ||
    this.boardPlayer2.includes(1) && this.boardPlayer2.includes(2) && this.boardPlayer2.includes(3)) {
    this.isAWin = true;
  } else if (this.boardPlayer1.includes(4) && this.boardPlayer1.includes(5) && this.boardPlayer1.includes(6) ||
  this.boardPlayer2.includes(4) && this.boardPlayer2.includes(5) && this.boardPlayer2.includes(6)) {
    this.isAWin = true;
  } else if (this.boardPlayer1.includes(7) && this.boardPlayer1.includes(8) && this.boardPlayer1.includes(9) ||
  this.boardPlayer2.includes(7) && this.boardPlayer2.includes(8) && this.boardPlayer2.includes(9)) {
    this.isAWin = true;
  }
  }

  verticalWins() {
    if (this.boardPlayer1.includes(1) && this.boardPlayer1.includes(4) && this.boardPlayer1.includes(7) ||
    this.boardPlayer2.includes(1) && this.boardPlayer2.includes(4) && this.boardPlayer2.includes(7)) {
    this.isAWin = true;
  } else if (this.boardPlayer1.includes(2) && this.boardPlayer1.includes(5) && this.boardPlayer1.includes(8) ||
  this.boardPlayer2.includes(2) && this.boardPlayer2.includes(5) && this.boardPlayer2.includes(8)) {
    this.isAWin = true;
  } else if (this.boardPlayer1.includes(3) && this.boardPlayer1.includes(6) && this.boardPlayer1.includes(9) ||
  this.boardPlayer2.includes(3) && this.boardPlayer2.includes(6) && this.boardPlayer2.includes(9)) {
    this.isAWin = true;
  }
  }

  diagonalWins() {
    if (this.boardPlayer1.includes(1) && this.boardPlayer1.includes(5) && this.boardPlayer1.includes(9) ||
    this.boardPlayer2.includes(1) && this.boardPlayer2.includes(5) && this.boardPlayer2.includes(9)) {
    this.isAWin = true;
  } else if (this.boardPlayer1.includes(7) && this.boardPlayer1.includes(5) && this.boardPlayer1.includes(3) ||
  this.boardPlayer2.includes(7) && this.boardPlayer2.includes(5) && this.boardPlayer2.includes(3)) {
    this.isAWin = true;
  }
  }

  winningBoards() {
    this.horizontalWins();
    this.verticalWins();
    this.diagonalWins();
  }

  isADraw() {
    if (this.boardPlayer1.length === 5 || this.boardPlayer2.length === 5) {
      this.draw = true;
    }
  }

  checkForWinner() {
    this.winningBoards()
    this.isADraw();
    if (this.isAWin) {
      this.winner = this.turn;
      this.addToPlayerWins();
      this.winner.saveWinsToStorage(this.winner);
    }
  }

  addToPlayerWins() {
    if (this.player1 === this.winner) {
      this.player1.wins++;
    } else if (this.player2 === this.winner) {
      this.player2.wins++;
    }
  }

}
