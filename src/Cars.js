
const Car = ({brand , color}) => {
  return (
    <div style={{ backgroundColor: 'hotpink', width: '400px', padding: '10px', margin: '5px auto' }}>
      <p>Brand: { brand } </p>
      <p>Color: { color }</p>
    </div>
  )
}

export default Car;
