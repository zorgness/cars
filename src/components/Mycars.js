import React, {Component} from 'react';
import Car from './Cars';
import capitalizeFirst from '../utils/Capitalizefirst';
import Wrapper from './Wrapper';
import Myheader from './Myheader';
import '../index.css';

class Mycars extends Component {

  state = {
    cars: ['mercedes', 'renault', 'peugeot']
  }

  noCopy = () => {
    alert("you can't copy this text");
  }

  mouseOver = (e) => {
    console.log(e.target);
    if(e.target.classList.contains('styled')) {
      e.target.classList.remove('styled');
    } else {
      e.target.classList.add('styled');
    }
  }

  changeSubTitle = (e) => {
   console.log(e.target);
   const title = document.querySelector('h3');
   if(title.innerHTML === 'lol') {
    title.innerHTML = 'Amet consectetur';
   } else {
    title.innerHTML = 'lol';
   }


  }

  render() {

    const title = this.props.title;
    const colortitle = this.props.color;




    return (
      <div>
        <Wrapper><Myheader myStyle={ colortitle } onMouseOver={ this.mouseOver }>{ title }</Myheader></Wrapper>
        <h3 onMouseOver={ this.mouseOver }>Amet consectetur</h3>
        <p onCopy={this.noCopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        <Car brand={capitalizeFirst(this.state.cars[0])} color="grey" />
        <Car brand={capitalizeFirst(this.state.cars[1])} />
        <Car brand={capitalizeFirst(this.state.cars[2])} color="black"/>
        <Car />

        <button onClick={ this.changeSubTitle }>change subtitle</button>


      </div>
    )
  };

}

export default Mycars;
