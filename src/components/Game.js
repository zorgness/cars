import React, { Component } from 'react'

class Game extends Component {

  state = {
    player: "mario",
    winner: true
  }
  render() {
    return (
      <div>
        <h1>Game</h1>
      </div>
    )
  }
}

export default Game