import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {

  render() {

    return (
      <div>
        <h1>{ this.props.title }</h1>
        <Car brand="Mercedes" color="grey" />
        <Car brand="Renault" />
        <Car brand="Peugeot" color="black"/>
        <Car />


      </div>
    )
  };

}

export default Mycars;
