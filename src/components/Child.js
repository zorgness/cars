const Child = props => {

  // console.log(props);

  // const answer = props.thisState.messageParent !== null ? <button onClick={props.answerFromChild}>answer</button> : <button disabled>answer</button>

  return (
    <div>
      <h2>{ props.name }</h2>
      {/* { answer } */}

      <button disabled={props.thisState.disabled} onClick={() => props.answerFromChild('lol')} >answer</button>

      <p>{props.thisState.messageChild}</p>

    </div>
  )
}

export default Child;
