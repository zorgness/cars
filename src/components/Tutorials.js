import React from 'react'
import '../App.css'
import Alert from 'react-bootstrap/Alert';

const Tutorial = (props) => {

  setTimeout(() => {
    props.history.push('/')

  }, 5000);

  return (
    <div>
      {/* <h1 class="my-title">Tutorial: Intro to React</h1> */}
      <Alert key={"light"} varient={"light"}>
          Under contruction{' '}
          <Alert.Link href="#">you will be redirect in 5 seconds</Alert.Link>
        </Alert>
    </div>
  )
}

export default Tutorial
