
const Car = ({brand , color}) => {
  const colorInfo = color ?  <p>Color: { color }</p> : <p>Color: not defined</p>
  if(brand) {
    return (
      <div style={{ backgroundColor: 'hotpink', width: '400px', padding: '10px', margin: '5px auto' }}>
        <p>Brand: { brand } </p>
        { colorInfo }
      </div>
    )

  } else {
    return (
      <div style={{ backgroundColor: 'hotpink', width: '400px', padding: '10px', margin: '5px auto' }}>

        <p>No datas</p>
      </div>
    )


  }

}

export default Car;
