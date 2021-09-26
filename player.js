class Player {
  constructor(id, token) {
    this.id = id;
    this.token = token;
    this.wins = [];

  }

  saveWinsToStorage(winner) {
    // var winsToStore = this.wins;
    var stringifiedWins = JSON.stringify(winner);
    localStorage.setItem("savedWins", stringifiedWins);
  }

  retrieveWinsFromStorage() {
    var retrievedWins = localStorage.getItem("savedWins");
    var parsedWins = JSON.parse(retrievedWins);
  }
}
