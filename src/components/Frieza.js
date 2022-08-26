import React, { Component } from 'react'
import Friz from '../images/frieza.jpg';

export class Frieza extends Component {

  state = {
    bg: ''
  }

  handleClick = () => {
    this.setState({bg: 'bg-danger'});
  }
  render() {

    if(this.state.bg === 'bg-danger') {
      throw new Error('wrong character selected');
    }
    return (
      <div className={`p-1 ${this.state.bg}`} onClick={this.handleClick}>
        <img src={Friz} alt="friz" />
      </div>
    )
  }
}

export default Frieza;
