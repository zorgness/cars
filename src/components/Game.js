import React, { Component } from 'react'

class Game extends Component {

  state = {
    player: "Mario",
    winner: true
  }

  render() {
    let result = "";
    // if(this.state.winner) {
    //   result = <h3>Bravo {this.state.player}</h3>

    // } else {
    //   result = <h3>Nul {this.state.player}</h3>
    // }

    this.state.winner ? result = <h3>Bravo {this.state.player}</h3> : result = <h3>Nul {this.state.player}</h3>

    this.state.winner && console.log("win");

    return(
      <div>
        <h1>Game</h1>
          {result}
      </div>
    )



  }
}

export default Game
