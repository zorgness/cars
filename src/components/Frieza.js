import React, { Component } from 'react'
import Friz from '../images/frieza.jpg';
import findGoodGuy from './FindGoodGuy';


export class Frieza extends Component {

  render() {

    const { bg, clickHandler } = this.props;

    if(bg === 'bg-danger') {
      throw new Error('wrong character selected');
    }
    return (
      <div className={`p-1 ${bg}`} onClick={clickHandler}>
        <img src={Friz} alt="friz" />
      </div>
    )
  }
}

export default findGoodGuy(Frieza);
