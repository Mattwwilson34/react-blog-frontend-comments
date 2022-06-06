// Libraries/Packages
import React, { useState } from 'react';
import chalk from 'chalk';

// Style Sheets
import './LoginForm.css';

const LoginForm = () => {
  // State
  const [loginCredentials, setLoginCredentials] = useState({});

  /**
   * Sends POST request with loginCredentials to API
   * @param {fired when form submit button clicked} event
   */
  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Set options for fetch POST
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginCredentials),
    };
    const response = await fetch('http://localhost:8080/login', requestOptions);
    const data = await response.json();
    console.log(data);
  };

  /**
   * Stores login form username/password in state
   * @param {fired when form text input changes} event
   */
  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setLoginCredentials({ ...loginCredentials, [inputName]: inputValue });
  };

  // JSX code for login form
  const renderForm = (
    <div className='LoginForm__Container'>
      <form className='LoginForm' onSubmit={handleSubmit}>
        <div className='LoginForm__InputContainer'>
          <div className='LoginForm__Header'>LOGIN</div>
          <input
            type='text'
            name='username'
            required
            onChange={handleInputChange}
            placeholder='Username'
          />
        </div>
        <div className='LoginForm__InputContainer'>
          <input
            type='password'
            name='password'
            required
            onChange={handleInputChange}
            placeholder='Password'
          />
        </div>
        <div className='LoginForm__ButtonContainer'>
          <input type='submit' />
        </div>
      </form>
    </div>
  );

  return renderForm;
};

export default LoginForm;
