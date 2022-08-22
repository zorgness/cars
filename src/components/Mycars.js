import React, {Component} from 'react';
import Car from './Cars';
import capitalizeFirst from '../utils/Capitalizefirst';
import Wrapper from './Wrapper';
import Myheader from './Myheader';

class Mycars extends Component {

  state = {
    cars: ['mercedes', 'renault', 'peugeot']
  }

  render() {

    const title = this.props.title
    const colortitle = this.props.color;


    return (
      <div>
        <Wrapper><Myheader myStyle={ colortitle }>{ title }</Myheader></Wrapper>
        <Car brand={capitalizeFirst(this.state.cars[0])} color="grey" />
        <Car brand={capitalizeFirst(this.state.cars[1])} />
        <Car brand={capitalizeFirst(this.state.cars[2])} color="black"/>
        <Car />


      </div>
    )
  };

}

export default Mycars;
