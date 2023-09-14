import React from 'react'
import { Link } from 'react-router-dom';




function Navbar() {


  return (
    <div>
      <nav className="menu">
          {/* Link to router pages */}
          {/* <Link to="/">Home</Link> */}
          {/* <Link to="/mission">Our Mission</Link>  */}
          {/* <Link to="/tours">Tours</Link> */}
          <Link to="/faq">FAQs</Link>
        </nav>
    </div>
  )
}

export default Navbar
