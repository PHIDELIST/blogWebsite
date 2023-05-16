import React from 'react'
import './navbar.css'




 function navbar(props) {
  return (
    <div id='nav-list'>
      <p>{props.title}</p>
      
    </div>
  )
}

export default navbar;