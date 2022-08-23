import React, { Component } from 'react';
import Imagecar from './Imagecar';
import styled from 'styled-components'

class Form extends Component {

  state = {
    name: "",
    email: "",

  }

  handleName = e => {
    this.setState({ name: e.target.value });
  }
  render() {
    const myStyle = {
      color: "white",
      backgroundColor: "black",
      margin: "5px auto",
      width: "50%"
    }
    const Button = styled.input`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`


    return (
      <div>
        <Imagecar color="aqua" height={400} style={{ backgroundColor: `${this.state.color}`}}/>
        <h1 style={myStyle}>Form</h1>

        <form action="" method="get" className="form-example">
          <div className="form-example">
            <label >Enter your name: </label>
            <input type="text" name="name" id="name" value={this.state.name} onChange={this.handleName} />
          </div>
          {/* <div className="form-example">
            <label >Enter your email: </label>
            <input type="email" name="email" id="email" value={this.state.email}  />
          </div> */}
          <div className="form-example">
            <Button type="submit" value="Subscribe!" />
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
