import React from 'react'
import {Link} from 'react-router-dom'
import "../Styles/Header.css"

const Header = ({cart}) => {
  return (
    <div className='navbar'>
        <div className='logo'>
          <img className='image-logo' src='src\assets\Black Illustrated Lion Hotel Logo (2).png'/>
          <h3>Royal Foodie</h3></div>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/cart"><span className='count'>{cart.length} </span>Cart</Link>
            </li>
            
        </ul>
    </div>
  )
}

export default Header
