import React, { Component } from 'react'
import Vege from '../images/vegeta.jpg';
import countHit from './CountHit';

export class Vegeta extends Component {

  render() {

    const {name, addOne, hocState, life} = this.props;

    const lifeValue = life > 0 ? (<td>{life} %</td>) : <td className='text-danger'>DEAD</td>;

    const button = life > 0 ? (<button className='btn btn-success' onClick={addOne}>{name} Hit</button>)
    : (<button className='btn btn-danger disabled'>dead</button>);

    return (
      <div className="col">
       <img src={Vege} alt="Vege" />
       <br/>
       <br/>
       { button }

       <table className='table table-striped'>

        <thead>
          <tr>
            <th scope="row">hit</th>
            <th scope="row">life</th>
          </tr>

        </thead>

        <tbody>
          <tr>
            <td>{hocState.hits}</td>
                {lifeValue}
          </tr>

        </tbody>

       </table>
      </div>
    )
  }
}

export default countHit(Vegeta);
