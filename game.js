class Game {
  constructor() {
  this.player1 = new Player(1, 'pumpkin');
  this.player2 = new Player(2, 'ghost');
  this.turn = this.player1;
  this.boardPlayer1 = [];
  this.boardPlayer2 = [];
  this.isAWin = false;
  this.draw = false;
  this.winner = null;
  }

  addToPlayerWins(winner) {
    if (this.player1 === winner) {
      this.player1.wins.push(1);
    } else if (this.player2 === winner) {
      this.player2.wins.push(1);
    }
  }

  switchTurns() {
    if (this.turn === this.player1) {
      this.turn = this.player2;
    } else if (this.turn === this.player2) {
      this.turn = this.player1;
    }
  }

  winningBoards() {
      if (this.boardPlayer1.includes(1 && 2 && 3) || this.boardPlayer2.includes(1 && 2 && 3)) {
      this.isAWin = true;
    } else if (this.boardPlayer1.includes(4 && 5 && 6) || this.boardPlayer2.includes(4 && 5 && 6)) {
      this.isAWin = true;
    } else if (this.boardPlayer1.includes(7 && 8 && 9) || this.boardPlayer2.includes(7 && 8 && 9)) {
      this.isAWin = true;
    } else if (this.boardPlayer1.includes(1 && 4 && 7) || this.boardPlayer2.includes(1 && 4 && 7)) {
      this.isAWin = true;
    } else if (this.boardPlayer1.includes(2 && 5 && 8) || this.boardPlayer2.includes(2 && 5 && 8)) {
      this.isAWin = true;
    } else if (this.boardPlayer1.includes(3 && 6 && 9) || this.boardPlayer2.includes(3 && 6 && 9)) {
      this.isAWin = true;
    } else if (this.boardPlayer1.includes(1 && 5 && 9) || this.boardPlayer2.includes(1 && 5 && 9)) {
      this.isAWin = true;
    } else if (this.boardPlayer1.includes(7 && 5 && 3) || this.boardPlayer2.includes(7 && 5 && 3)) {
      this.isAWin = true;
      }
  }

  // boardDraw() {
  //   if (this.board.includes(1,2,3,4,5,6,7,8,9)) {
  //     this.draw = true;
  //   }
  // }

  checkForWinner() {
    this.winningBoards()
    console.log('player1', this.boardPlayer1)
    console.log('player2', this.boardPlayer2)
    console.log(this.isAWin)
    if (this.isAWin === true) {
      this.winner = this.turn;
    }
    console.log(this.winner);
  }

  stopGame() {
    if (this.winner === this.player1 || this.winner === this.player2) {

  }

}
}
