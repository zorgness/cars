import React, { Component } from 'react'

class ChildComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    // console.log("from child constructor")
  }

  componentDidMount() {
    // console.log("from child didMount")
  }
  render() {
    console.log(`%c from child render`, `color: blue;`)
    return (

      <div style={{color: 'blue'}}>
        {/* {console.log("from child DOM")} */}
        child: {this.props.name}
      </div>
    )
  }
}

export default ChildComponent
