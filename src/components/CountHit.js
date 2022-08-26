import React, { Component } from 'react'

const countHit = (WrappedComponent) => {

    class CountHit extends Component {
      state = {
        hits: 0
      }

      addOne = () => {
        this.setState(prevState => {
          return {
            hits : prevState.hits + 1
          }
        })
      }

      componentDidUpdate = (prevProps, prevState) => {
        if(this.state !== prevState) {
          const CompName = WrappedComponent.name;
          this.props.reduceLife(CompName)
        }

      }

      render() {
        return <WrappedComponent addOne={this.addOne} hocState={this.state} {...this.props} />

      }
    }
    return CountHit;
}

export default countHit
