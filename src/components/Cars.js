import Wrapper from './Wrapper';

const Car = ({brand , color}) => {

    let colorInfo = "";
      if(color) {
        colorInfo = color;
      } else {
        colorInfo = "not defined";
      }

    return brand ? (
        <>
          <p>Brand: { brand } </p>
          <p>Color: { colorInfo }</p>
        </>

    ) : (

          <p>No datas</p>)

  }


export default Car;
