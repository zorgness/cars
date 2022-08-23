import React, {Component} from 'react';
import Car from './Cars';
import capitalizeFirst from '../utils/Capitalizefirst';
import Wrapper from './Wrapper';
import Myheader from './Myheader';
import '../index.css';

class Mycars extends Component {

  state = {
    cars: [ {brand:'mercedes', color: 'grey', year: 2020},
            {brand:'renault', color: '', year: 2007},
            {brand:'peugeot', color: 'black', year: 2021} ]
  }

  noCopy = () => {
    alert("you can't copy this text");
  }

  mouseOver = (e) => {
    // console.log(e.target);
    if(e.target.classList.contains('styled')) {
      e.target.classList.remove('styled');
    } else {
      e.target.classList.add('styled');
    }
  }

  changeSubTitle = (e) => {
  //  console.log(e.target);
   const title = document.querySelector('h3');
   if(title.innerHTML === 'lol') {
    title.innerHTML = 'Amet consectetur';
   } else {
    title.innerHTML = 'lol';
   }
  }

  add10Years = (e) => {
    const updateState = this.state.cars.map((param) => {
      return param.year -= 10;
    })

    this.setState({
      updateState
    })
  }

  getAge = (param) => {
    const yearNow = new Date().getFullYear();
    const age  = yearNow - param
    return age > 1 ? `${age} years` : `${age} year` ;
  }



  render() {

    const title = this.props.title;
    const colortitle = this.props.color;

    return (
      <div>
        <Wrapper><Myheader myStyle={ colortitle } onMouseOver={ this.mouseOver }>{ title }</Myheader></Wrapper>
        <h3 onMouseOver={ this.mouseOver }>Amet consectetur</h3>
        <p onCopy={this.noCopy}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        {/* <Car brand={capitalizeFirst(this.state.cars[0].brand)} color={this.state.cars[0].color} year={year - this.state.cars[0].year + 'years'}  />
        <Car brand={capitalizeFirst(this.state.cars[1].brand)} color={this.state.cars[1].color} year={year - this.state.cars[1].year + 'years'} />
        <Car brand={capitalizeFirst(this.state.cars[2].brand)} color={this.state.cars[2].color} year={year - this.state.cars[2].year + 'years'} />
        <Car /> */}


        {this.state.cars.map(({brand, color, year}, index ) => {
          return (
            <Car key={index} brand={capitalizeFirst(brand)} color={color} year={this.getAge(year)} />
          )
        })}

        <button onClick={ this.changeSubTitle }>change subtitle</button>


        <button onClick={ this.add10Years}>add 10 years</button>


      </div>
    )
  };

}

export default Mycars;
