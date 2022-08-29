import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

  state = {
    data: {}

  }


  componentDidMount() {
    // console.log(this.props.match.params.profileId)
    const iD = this.props.match.params.profileId;

    const falseData = [

      {
        name: "nameFirst1",
        email: "internetEmail1",
        phone: "phoneHome1"
      },
      {
        name: "nameFirst2",
        email: "internetEmail2",
        phone: "phoneHome2"
      },
      {
        name: "nameFirst3",
        email: "internetEmail3",
        phone: "phoneHome3"
      },
      {
        name: "nameFirst4",
        email: "internetEmail4",
        phone: "phoneHome4"
      }

    ]

    this.setState({data: falseData[iD] })

// let payload = {
//   token: "1mpPcS0fhyCj58B-ySydBw",
//   data: {
//     name: "nameFirst",
//     email: "internetEmail",
//     phone: "phoneHome",
//   }
// };

// axios({
// method: "post",
// url: "https://app.fakejson.com/q",
// data: payload
// }).then((resp )=> {
// // Do something with fake data

// this.setState({data: falseData })

// });
  }

  render() {



    const {name, email, phone } = this.state.data;

    return (
      <div className='container mt-3'>
        <h1>Profile</h1>
        <ul className='list-group'>

          <li className="list-group-item">Name: {name} </li>
          <li className="list-group-item">Email: {email} </li>
          <li className="list-group-item">Phone: {phone}</li>

        </ul>
        </div>
    )
  }
}

export default Profile
