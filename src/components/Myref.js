import React, { Component } from 'react'

export class Myref extends Component {

  constructor(props) {
    super(props)

    this.state = {
      value: ""
    }

    this.myValue = React.createRef();
    console.log(this.myValue);

    this.myInput = React.createRef();
  }


  addFocus = () => {
    this.myInput.current.focus();
  }

  render() {
    return (
      <div>
        {/* <h1 ref={this.myValue}>Value: {this.state.value}</h1> */}
        <input type="text" id="value" ref={this.myInput}/>

      </div>
    )
  }
}

export default Myref
