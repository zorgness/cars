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
        <Wrapper><h1 style={{color:colortitle}}>{ title }</h1></Wrapper>
        <Wrapper><Car brand={capitalizeFirst(this.state.cars[0])} color="grey" /></Wrapper>
        <Wrapper><Car brand={capitalizeFirst(this.state.cars[1])} /></Wrapper>
        <Wrapper><Car brand={capitalizeFirst(this.state.cars[2])} color="black"/></Wrapper>
        <Wrapper><Car /></Wrapper>


      </div>
    )
  };

}

export default Mycars;
