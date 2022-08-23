import React from 'react'

const customBtn = {
  fontSize: "1em",
  margin: "1em",
  padding: "0.25em 1em",
  border: "2px solid palevioletred",
  borderRadius: "3px",

}
const Btn = ({children, btnstyle,  handleClick}) => {
  return <button style={{...customBtn, ...btnstyle}} onClick={handleClick}>{children}</button>


}

export default Btn;
