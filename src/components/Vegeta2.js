import React, { Component } from 'react'
import Vege from '../images/vegeta.jpg';

export class Vegeta2 extends Component {
  state = {
    bg: ''
  }

  handleClick = () => {
    this.setState({bg: 'bg-success'});
  }
  render() {
    return (
      <div className={`p-1 ${this.state.bg}`} onClick={this.handleClick}>
        <img src={Vege} alt="Vege" />
      </div>
    )
  }
}

export default Vegeta2
