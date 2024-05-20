import React from 'react'
import { useParams } from 'react-router-dom'

function Profile() {

    let { userId } = useParams()

  return (
    <div>
        <h3>Profile</h3> 
        <p>user id : {userId}</p>
    </div>
  )
}

export default Profile