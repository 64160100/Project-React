import React from 'react'
import { NavLink } from 'react-router-dom'

function Home() {
  return (
    <>
      <header>
        <h1>hello world</h1>
      </header>
      <nav>
        <NavLink end to="/" >Home</NavLink><br/>
        <NavLink to="/about" >About</NavLink><br/>
        <NavLink to="/contact" >contact</NavLink><br/>
        <NavLink to="/dashboard" >Dashboard</NavLink><br/>
        <NavLink to="/login" >Login</NavLink>
      </nav>
    </>
  )
}

export default Home