import React, { Component } from 'react'

const findGoodGuy = (WrappedComponent) => {

    class FindGoodGuy extends Component {
      state = {
        bg: ''
      }

      handleClick = () => {
        if(WrappedComponent.name === 'Frieza')
        {
          this.setState({bg: 'bg-danger'});
        } else {
          this.setState({bg: 'bg-success'});
        }

      }
      render() {
        return <WrappedComponent bg={this.state.bg} clickHandler={this.handleClick} />

      }
    }

    return FindGoodGuy;
}

export default findGoodGuy;
