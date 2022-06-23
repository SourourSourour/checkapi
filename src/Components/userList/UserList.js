import React from 'react'
import User from './User'

const UserList = ({users}) => {
  return (
    <div>
        {users.map((el)=> <User el={el}/>)}
    </div>
  )
}

export default UserList