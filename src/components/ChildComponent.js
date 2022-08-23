import React, { Component } from 'react'

class ChildComponent extends Component {
  constructor(props) {
    super(props)

    this.state = {}

    console.log("from child constructor")
  }

  componentDidMount() {
    console.log("from child didMount")
  }
  render() {
    console.log("from child render")
    return (

      <div>
        {console.log("from child DOM")}
        ChildComponent
      </div>
    )
  }
}

export default ChildComponent
