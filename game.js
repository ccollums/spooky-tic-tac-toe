class Game {
  constructor() {
  this.player1 = new Player(one, pumpkin);
  this.player2 = new Player(two, ghost);
  this.turn = this.player1;
  this.board = [];
  this.isAWin = false;
  this.draw = false;
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
    if (this.board.includes(1,2,3)) {
      this.isAWin = true;
    } else if (this.board.includes(4,5,6)) {
      this.isAWin = true;
    } else if (this.board.includes(7,8,9)) {
      this.isAWin = true;
    } else if (this.board.includes(1,4,7)) {
      this.isAWin = true;
    } else if (this.board.includes(2,5,8)) {
      this.isAWin = true;
    } else if (this.board.includes(3,6,9)) {
      this.isAWin = true;
    } else if (this.board.includes(1,5,9)) {
      this.isAWin = true;
    } else if (this.board.includes(7,5,3)) {
      this.isAWin = true;
    }
  }

  boardDraw() {
    if (this.board.includes(1,2,3,4,5,6,7,8,9)) {
      this.draw = true;
    }
  }

}
