import './Logout.css';
import React, { useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  // State
  const [logingOut, setLogingOut] = useState(false);
  const { setAuthToken, setUser } = useOutletContext();

  // Navigate
  const navigate = useNavigate();

  const logOut = () => {
    setLogingOut(true);
    setTimeout(() => {
      navigate('/');
      setUser(null);
      setAuthToken(null);
    }, 2000);
  };

  return (
    <div className='Logout'>
      {logingOut ? (
        <span className='Logout__Message'>Ok Logging you out!</span>
      ) : (
        <span className='Logout__Message'>click the button to logout</span>
      )}
      <button className='Logout__Button' onClick={logOut}>
        Logout
      </button>
    </div>
  );
};

export default Logout;
