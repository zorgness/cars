import React, { Component } from 'react'
import Gok from '../images/goku.jpg';
import findGoodGuy from './FindGoodGuy';


export class Goku2 extends Component {

  render() {

    const { bg, clickHandler } = this.props;

    return (
      <div className={`p-1 ${bg}`} onClick={clickHandler}>
        <img src={Gok} alt="Goku" />
      </div>
    )
  }
}

export default findGoodGuy(Goku2);
