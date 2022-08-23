import React from 'react'

const Singer = props => {

  const {name, age} = props;
  return (
    <div>
      <p>Singer: {name} Age: {age}</p>
    </div>
  )
}

export default Singer;
