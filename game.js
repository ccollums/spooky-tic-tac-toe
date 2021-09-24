class Game {
  constructor() {
  this.player1 = new Player(1, 'pumpkin');
  this.player2 = new Player(2, 'ghost');
  this.turn = this.player1;
  this.boardPlayer1 = [];
  this.boardPlayer2 = [];
  this.isAWin = false;
  this.wins = [];
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
  // boardDraw() {
  //   if (this.board.includes(1,2,3,4,5,6,7,8,9)) {
  //     this.draw = true;
  //   }
  // }
  addToPlayerWins() {
    if (this.player1 === this.winner) {
      this.player1.wins.push(1);
    } else if (this.player2 === this.winner) {
      this.player2.wins.push(1);
    }
  }

  isADraw() {
    console.log(this.draw)
    if (this.boardPlayer1.length === 5 || this.boardPlayer2.length === 5) {
      this.draw = true;
    }
  }

  checkForWinner() {
    this.winningBoards()
    this.isADraw();
    if (this.isAWin === true) {
      this.winner = this.turn;
      this.addToPlayerWins();
      this.wins.push(this.winner);
      this.winner.saveWinsToStorage();
    }
  }


  stopGameBoard() {
    if (game.winner === game.player1 || game.winner === game.player2) {
      setTimeout(function() {console.log('hi')}, 500);
    }
  }

}
