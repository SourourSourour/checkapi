import React from 'react'
import "./User.css"

const User = ({el}) => {
  return (
    <div>
        <div>
  <div className="card-container">
    <h3>{el.name}</h3>
    <h6>{el.username}</h6>
    <p>{el.address.street} <br />{el.address.city}</p>
    <div className="buttons">
      <button className="primary">
        {el.phone}
      </button>
      <button className="primary ghost">
        {el.email}
      </button>
    </div>
 
  </div>
 </div>

    </div>
  )
}

export default User