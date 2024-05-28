import React from 'react'
import { NavLink } from 'react-router-dom'

function Dashboard() {
  return (
    <>
      <header>
        <h1>hello world</h1>
      </header>
      <nav>
        <NavLink end to="/" >Home</NavLink>
        <NavLink to="/about" >About</NavLink>
        <NavLink to="/contact" >contact</NavLink>
        <NavLink to="/dashboard" >Dashboard</NavLink>
        
      </nav>
    </>
  )
}

export default Dashboard