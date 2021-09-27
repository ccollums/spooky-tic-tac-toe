class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = 0;
  }

  saveWinsToStorage(winner) {
    if (this.id === 1) {
    var stringifiedWinsPlayer1 = JSON.stringify(winner);
    localStorage.setItem("savedWins1", stringifiedWinsPlayer1);
  } else if (this.id === 2) {
    var stringifiedWinsPlayer2 = JSON.stringify(winner);
    localStorage.setItem("savedWins2", stringifiedWinsPlayer2);
  }
}

  retrieveWinsFromStorage() {
    if (this.id === 1 && localStorage.getItem("savedWins1")) {
      var retrievedWins1 = localStorage.getItem("savedWins1");
      var parsedWins1 = JSON.parse(retrievedWins1);
      this.wins += parsedWins1.wins;
    } else if (this.id === 2 && localStorage.getItem("savedWins2")) {
      var retrievedWins2 = localStorage.getItem("savedWins2");
      var parsedWins2 = JSON.parse(retrievedWins2);
      this.wins += parsedWins2.wins;
    }
  }
}
