import React from 'react'
import { MyContext } from './MyContext'

const ContentData = () => {
  return (
    <MyContext.Consumer>

     { data => {
        return (

            <div className="card card-body">
              <ul className="list-group">
                <li className="list-group-item">Name: {data.name}  </li>
                <li className="list-group-item">Age: {data.age} </li>
              </ul>
            </div>


        )}
      }

    </MyContext.Consumer>

  )
}

export default ContentData
