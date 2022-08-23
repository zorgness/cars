import { Component } from 'react';
import Child from './Child';

class Parent extends Component {

  state = {
    messageParent: null,
    messageChild: null,
    disabled: true
  }

  orderFromParent = (msg) => {
    this.setState({ messageParent: msg,
                    disabled: false})
  }


  answerFromChild = (msg) => {
    this.setState({ messageChild: msg})
  }

  render() {
    return (
      <div>
        <h1>Parent: </h1>
          <button onClick={() => this.orderFromParent('lel')}>order from parent</button>
          <p>{ this.state.messageParent }</p>
        <br/>
          <Child
          name="Child"
          thisState={this.state}
          answerFromChild={this.answerFromChild}
          />
        <hr />


      </div>


    )
  }
}

export default Parent;
