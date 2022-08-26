import React, { Component } from 'react'
import Vege from '../images/vegeta.jpg';
import findGoodGuy from './FindGoodGuy';

export class Vegeta2 extends Component {

  render() {

    const { bg, clickHandler } = this.props;

    return (
      <div className={`p-1 ${bg}`} onClick={clickHandler}>
        <img src={Vege} alt="Vege" />
      </div>
    )
  }
}

export default findGoodGuy(Vegeta2);
