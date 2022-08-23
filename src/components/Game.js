import React, { Component } from 'react'
import Alert from 'react-bootstrap/Alert';
import Btn from './CustomBtn';

class Game extends Component {

  state = {
    player: "Mario",
    winner: true,
    status: "success"
  }

  playGame = () => {
    if(this.state.winner === false) {
      this.setState({ winner: true, status: "success" });
    } else {
      this.setState({ winner: false, status: "danger" });
    }
  }

  render() {


    // let result = "";
    // if(this.state.winner) {
    //   result = <h3>Bravo {this.state.player}</h3>

    // } else {
    //   result = <h3>Nul {this.state.player}</h3>
    // }

    const result = this.state.winner ? `Bravo ${this.state.player}` : `Nul ${this.state.player}`



    return(
      <div>
        <h1>Game</h1>
          <Alert variant={this.state.status}>{result}</Alert>
        <button className="btn btn-primary" onClick={this.playGame}>Play</button>
        <Btn handleClick={this.playGame}>Play</Btn>
      </div>
    )



  }
}

export default Game
