
const Car = ({brand , color}) => {

    let colorInfo = "";
      if(color) {
        colorInfo = color;
      } else {
        colorInfo = "not defined";
      }

    return brand ? (
      <div style={{ backgroundColor: 'hotpink', width: '400px', padding: '10px', margin: '5px auto' }}>
        <p>Brand: { brand } </p>
        <p>Color: { colorInfo }</p>
      </div>
    ) : (
        <div style={{ backgroundColor: 'hotpink', width: '400px', padding: '10px', margin: '5px auto' }}>
          <p>No datas</p>
        </div>)
  }


export default Car;
