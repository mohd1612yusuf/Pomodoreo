import React from 'react'
import {link,NavLink} from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <ul>
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/About'>About</NavLink></li>
        <li><NavLink to='/Contact'>Contact</NavLink></li>
        <li><NavLink to='/User'>User</NavLink></li>

      </ul>
    </div>
  )
}

export default Navbar
