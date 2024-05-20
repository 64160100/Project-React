import React from 'react'
import { useNavigate } from 'react-router-dom'

function About() {

  let navigate = useNavigate()

  return (
    <div>
      my name is AboutPage
      <button onClick={() => navigate("/", { state : "I'm aboutpage"})}>Go back to the homepage</button>

      </div>
  )
}

export default About