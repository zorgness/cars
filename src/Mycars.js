import React, {Component} from 'react';
import Car from './Cars';

class Mycars extends Component {
  render() {
    return (
      <div>
        <h1>My cars</h1>
        <Car brand="Mercedes" color="grey" />
        <Car brand="Renault" color="white"/>
        <Car brand="Peugeot" color="black"/>


      </div>
    )
  };

}

export default Mycars;
