
import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home( {login} ) {

  let navigate = useNavigate()

  return (
    <div>
      <p>my name is HomePage</p>
      <button onClick={() => {
        login();
        navigate('/dashboard')
      }}>
        Login</button>

    </div>
  )
}

export default Home