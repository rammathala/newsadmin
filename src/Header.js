import React from 'react'
import logo from './logo.png'
import './Header.css';
import Tabs from './Tabs';
function Header() {
  return (
    <div className='Header'>
      <div className='Header1'>
      <div className='logo'>
     <img className='slo'src={logo} alt='Logo'/>
      </div>
      <div className='Navs'>
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
        <a>Home</a>
      </div>
      </div>
      <Tabs/>
    </div>
  )
}

export default Header