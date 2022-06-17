// Compenents
import './App.css';
import Navbar from '../Navbar';

// React utilities
import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  // State
  const [authToken, setAuthToken] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    const authToken = JSON.parse(localStorage.getItem('authToken'));

    if (!user || !authToken) return console.log('not logged in');

    setUser(user);
    setAuthToken(authToken);
  }, []);

  return (
    <div className='App'>
      {authToken && user ? (
        <div className='App__Username'>{user.username}</div>
      ) : (
        <div className='App__Username'>Not logged in</div>
      )}
      <Navbar user={user} authToken={authToken}></Navbar>
      <Outlet context={{ setAuthToken, setUser }}></Outlet>
    </div>
  );
}

export default App;
