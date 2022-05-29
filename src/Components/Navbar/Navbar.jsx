import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='Navbar'>
      <NavLink className='Navbar__NavLink' to='/'>
        Home
      </NavLink>
      <NavLink className='Navbar__NavLink' to='blogs'>
        Blogs
      </NavLink>
    </div>
  );
};

export default Navbar;
