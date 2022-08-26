import React from 'react'

const FunctionComponent = props => {
  console.log(`%c from function render`, `color: purple`)
  return (
    <div style={{color: 'purple'}}>FunctionComponent: {props.name}</div>
  )
}

export default React.memo(FunctionComponent)
