import React from 'react';
import { NavLink } from 'react-router-dom';

import '../layout/Navber.css';

function Navber() {
  return (
    <nav>
        <NavLink className='nav-item' to="/" > Home </NavLink>
        <NavLink className='nav-item' to='/about'> About </NavLink>
        <NavLink className='nav-item' to='/contact' > Contact </NavLink>
        <NavLink className='nav-item' to='/proted'> Proted </NavLink>
    </nav>
   
 )
}

export default Navber