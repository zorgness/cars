import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {

  render() {

    const title = this.props

    return (
      <div>
        <h1>{ title }</h1>
        <Car brand="Mercedes" color="grey" />
        <Car brand="Renault" />
        <Car brand="Peugeot" color="black"/>
        <Car />


      </div>
    )
  };

}

export default Mycars;
