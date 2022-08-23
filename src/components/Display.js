import React, { Component } from 'react';
import Singer from './Singer';

class Display extends Component {
  render() {
    return (
      <div>
        <h1>Display</h1>

        <Singer name="Eric Clapton" age={74} />
        <Singer name="Curt Cobain" age={28}/>
        <Singer name="John Lennon" age={45}/>

      </div>


    )
  }
}

export default Display;
