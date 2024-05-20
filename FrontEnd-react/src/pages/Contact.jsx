import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
      <p>my name is ContactPage</p>
      <Link to="/" state={"Hello!! I'm from Contact"} >Go back to the homepage</Link>

    </div>
  )
}

export default Contact