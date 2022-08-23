import Wrapper from './Wrapper';

const Car = ({brand , color, year}) => {

    let colorInfo = "";
      if(color) {
        colorInfo = color;
      } else {
        colorInfo = "not defined";
      }

    return brand ? (
        // <Wrapper>
        //   <p>Brand: { brand } </p>
        //   <p>Color: { colorInfo }</p>
        //   <p>Year: { year }</p>
        // </Wrapper>

          <tr>
            <td>{ brand }</td>
            <td>{ colorInfo }</td>
            <td>{ year }</td>
          </tr>


    ) : (
      <Wrapper>
         <p>No datas</p>
      </Wrapper>
    )
  }


export default Car;
