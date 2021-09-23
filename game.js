class Game {
  constructor() {
  this.player1 = new Player(one, pumpkin);
  this.player2 = new Player(two, ghost);
  }

  addToWins(winner) {
    if (this.player1 === winner) {
      this.player1.wins++;
    } else if (this.player2 === winner) {
      this.player2.wins++;
    }
  }
}
