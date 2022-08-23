import React, { Component } from 'react';
import ChildComponent from './ChildComponent';


class Lifecycle extends Component {

  constructor(props) {

    super(props)

    this.state = {
      name: 'toto',
      step: 1,
      age: 22
    }

    console.log(`step: ${this.state.step} from constructor`)
  }

  static getDerivedStateFromProps(props, state) {
      console.log(`%c getDerivedStateFromProps`, `color:red; background: yellow; font-size: 20px; font-weight: bold;`)
      return null;


  }

  componentDidMount() {
    console.log(`step: ${this.state.step} from didMount`)
    this.setState({
       name: this.props.name,
      step: this.state.step + 1
     })
     console.log("setState from didMount")
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("didUpdate")
    console.log(prevState)
    console.log(this.state)
  }

  componentWillUnmount() {
    console.log("willUnmount")
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('from shouldComponentUpdate')
    return false;
  }

  oneYear = () => {
    this.setState((prevState) => ({
      age: prevState.age + 1
    }))
  }

  forceChange = () => {
    this.forceUpdate(() => {
      console.log("forceChange");
      this.setState({
        name: this.props.name})
    })
  }


  render() {

    console.log(`step: ${this.state.step} from render`)

    return (
      <div>
        {console.log(`step: ${this.state.step} from DOM`)}
        <h1>Lifecycle</h1>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>Loading step: {this.state.step}</p>
        {/* <ChildComponent /> */}
        <button onClick={this.oneYear}>+ 1 year</button>
        <button onClick={this.forceChange}>force</button>
      </div>
    )
  }
}

export default Lifecycle
