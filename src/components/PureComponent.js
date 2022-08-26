import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {}

    // console.log("from child constructor")
  }

  componentDidMount() {
    // console.log("from child didMount")
  }
  render() {
    console.log(`%c from pure render`, `color: green;`)
    return (

      <div style={{color: 'green'}}>
        {/* {console.log("from child DOM")} */}
        Pure: {this.props.name}
      </div>
    )
  }
}

export default PureComp;
