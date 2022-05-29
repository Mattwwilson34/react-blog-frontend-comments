// Compenents
import './App.css';
import Navbar from '../Navbar';

// React utilities
import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className='App'>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
