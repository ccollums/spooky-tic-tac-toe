class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];

  }

  saveWinsToStorage(winner) {
    var winsToStore = winner;
    var stringifiedWins = JSON.stringify(winsToStore);
    localStorage.setItem("savedWins", stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem("savedWins");
    var parsedWins = JSON.parse("savedWins");
  }
}
