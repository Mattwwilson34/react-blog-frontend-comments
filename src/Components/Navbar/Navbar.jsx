import './Navbar.css';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = (props) => {
  const { user, authToken } = props;

  return (
    <div className='Navbar'>
      <NavLink className='Navbar__NavLink' to='/'>
        Home
      </NavLink>
      <NavLink className='Navbar__NavLink' to='/blog_posts'>
        Blogs
      </NavLink>
      {user && authToken ? (
        <NavLink className='Navbar__NavLink' to='/logout'>
          Logout
        </NavLink>
      ) : (
        <NavLink className='Navbar__NavLink' to='/login'>
          Login
        </NavLink>
      )}
    </div>
  );
};

export default Navbar;
