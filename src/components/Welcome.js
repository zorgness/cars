const Welcome = () => {

const invoqFunction = () => console.log('good day ');


const invoqFunctionArgs = args => console.log(args);



  return (
    <div>
      <button onClick={invoqFunction}>function</button>
      <button onClick={() => invoqFunctionArgs('good evening')}>function(args)</button>
      <button onClick={() => console.log('good night')}>function console.log</button>
    </div>
  )
}

export default Welcome;
