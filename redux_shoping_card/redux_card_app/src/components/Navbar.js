import React from 'react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
   <>
   <div
        style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height:'50px',
            backgroundColor: 'cyan'
        }}
    >
        <span className="logo">REDUX STORE</span>
        <div className='navItem'>
            <Link className="navLink" to="/">
                Home
            </Link>
            <Link className="navLink Citem" to="/cart">
                Cart
            </Link>
            <span className="cartCount">Cart items: {0}</span>
        </div>
        </div>

   </>
  )
}

export default Navbar