import React, {Component} from 'react';
import Car from './Cars';
import capitalizeFirst from './utils/Capitalizefirst';

class Mycars extends Component {

  state = {
    cars: ['mercedes', 'renault', 'peugeot']
  }

  render() {

    const title = this.props.title
    const colortitle = this.props.color;


    return (
      <div>
        <h1 style={{color:colortitle}}>{ title }</h1>
        <Car brand={capitalizeFirst(this.state.cars[0])} color="grey" />
        <Car brand={capitalizeFirst(this.state.cars[1])} />
        <Car brand={capitalizeFirst(this.state.cars[2])} color="black"/>
        <Car />


      </div>
    )
  };

}

export default Mycars;
