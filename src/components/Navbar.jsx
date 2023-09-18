import React from 'react'
import { Link } from 'react-router-dom';

function Navbar() {


  return (
    <div>
      <nav className="menu">
          {/* Link to router pages */}
          <Link to="/">Home</Link>
          <Link to="/about">About us </Link> 
          <Link to="/tours">Tours</Link>
          <Link to="/faq">FAQs</Link>
          <Link to="/contact">Contact</Link>
          
        </nav>
    </div>
  )
}

export default Navbar
