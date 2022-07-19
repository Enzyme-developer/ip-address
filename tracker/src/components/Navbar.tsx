import React from 'react'
import './navbar.css'
import Search from './Search'

const Navbar = () => {
  return (
    <div className='navbar'>
      <h1>IP Address Tracker</h1>
      <Search />
    </div>
  )
}

export default Navbar