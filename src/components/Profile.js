import React, { Component } from 'react';
import axios from 'axios';

class Profile extends Component {

  state = {
    data: {}

  }

  componentDidMount() {
    // console.log(this.props.match.params.profileId)
    const iD = this.props.match.params.profileId;



let payload = {
  token: "1mpPcS0fhyCj58B-ySydBw",
  data: {
    name: "nameFirst",
    email: "internetEmail",
    phone: "phoneHome",
    _repeat: 300
  }
};

axios({
method: "post",
url: "https://app.fakejson.com/q",
data: payload
}).then(function(resp) {
// Do something with fake data
console.log(resp.data[iD])
});
  }

  render() {

    const {name, email, phone } = this.state.data;

    return (
      <div className='container mt-3'>
        <h1>Profile</h1>
        <ul className='list-group list-group-flush'>

          <li className="list-group-items">Name: {name} </li>
          <li className="list-group-items">Email: {email} </li>
          <li className="list-group-items">Phone: {phone}</li>

        </ul>
        </div>
    )
  }
}

export default Profile
