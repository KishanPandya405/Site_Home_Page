import React from 'react'
import '../Styles/Navbar.css'

const Navbar = () => {
  return (
    <div className='Nav'>
        <img src='Bitmaplogo.png' alt='logo' />
        <ul>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>About us</a></li>
          <li><a href='#'>Blogs</a></li>
          <li><a href='#'>Case Studies</a></li>
          <button>CONTACT US</button>
          </ul>
    </div>
  )
}

export default Navbar;