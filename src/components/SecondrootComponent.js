import React, { Component } from 'react'
import ReactDOM from "react-dom";

class SecondrootComponent extends Component {

  constructor(props) {
    super(props)

    this.popUpContainer = document.createElement("div");
    document.body.appendChild(this.popUpContainer);
  }

  componentWillUnmount() {
    document.body.removeChild(this.popUpContainer);
   }

  render() {
    return ReactDOM.createPortal (
      <div className="my-modal" onClick={this.props.close}>
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel voluptates similique vitae nihil quis eos, perspiciatis cum ut deserunt placeat ipsum labore nam nesciunt nostrum eum voluptas? Assumenda, unde aspernatur!</p>
          <button>close</button>
        </div>
      </div>,
      // document.getElementById("second-root")
      this.popUpContainer
    )
  }
}

export default SecondrootComponent
