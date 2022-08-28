import React, { Component } from 'react'

class Profile extends Component {

  state = {
    iD: null,

  }

  componentDidMount() {
    console.log(this.props.match.params.profileId)
  }

  render() {

    const iD = this.props.match.params.profileId;
    return (
      <div className='container mt-3'>
        <h1>Profile</h1>
        <ul className='list-group list-group-flush'>

          <li className="list-group-items">
            ID: {iD}
          </li>

        </ul>
        </div>
    )
  }
}

export default Profile
