import React from 'react'
import './navbar.css'
import viteLogo from '/vite.svg'



 function navbar(props) {
  return (
    <div id='nav-list'>
      <img src={viteLogo} className="logo" alt="Vite logo" />
      <p>{props.title}</p>
      
    </div>
  )
}

export default navbar;