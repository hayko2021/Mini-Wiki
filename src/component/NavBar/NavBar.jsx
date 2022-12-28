import React from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {

    const navigate = useNavigate()
  return (
    <><nav>
    <ul>
      <li><NavLink className="a" to="/" end>Home</NavLink></li>
      <li><NavLink className="a"  to="/about">About</NavLink></li>
      <li><NavLink className="a"to="/posts">All</NavLink></li>
    </ul>
  </nav>
  <button className='nextback' onClick={() => {navigate(+1)}}>Back</button>
  <button className='nextback' onClick={() => {navigate(-1)}}>Next</button>
    
    </>
  )
}

export default NavBar;
