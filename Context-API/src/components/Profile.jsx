import React, { useContext } from 'react'
import UserContext from '../context/UserContext';

function Profile() {
    const {user} = useContext(UserContext);

  if(!user) return <div>Please Login</div>

  return (
    <div>
        <h1>Profile</h1>
        <div>Welcome {user.username}</div>
    </div>
  )
}

export default Profile