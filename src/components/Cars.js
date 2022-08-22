import Wrapper from './Wrapper';

const Car = ({brand , color}) => {

    let colorInfo = "";
      if(color) {
        colorInfo = color;
      } else {
        colorInfo = "not defined";
      }

    return brand ? (
        <Wrapper>
          <p>Brand: { brand } </p>
          <p>Color: { colorInfo }</p>
        </Wrapper>

    ) : (
      <Wrapper>
         <p>No datas</p>
      </Wrapper>
    )
  }


export default Car;
