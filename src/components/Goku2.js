import React, { Component } from 'react'
import Gok from '../images/goku.jpg';

export class Goku2 extends Component {

  state = {
    bg: ''
  }

  handleClick = () => {
    this.setState({bg: 'bg-success'});
  }
  render() {
    return (
      <div className={`p-1 ${this.state.bg}`} onClick={this.handleClick}>
        <img src={Gok} alt="Goku" />
      </div>
    )
  }
}

export default Goku2;
