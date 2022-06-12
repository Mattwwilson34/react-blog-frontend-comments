// Libraries/Packages
import React, { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

// Style Sheets
import './LoginForm.css';

const LoginForm = () => {
  // State
  const [loginCredentials, setLoginCredentials] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [shouldRedirect, setShouldRedirect] = useState(false);
  const [authToken, setAuthToken] = useOutletContext();

  // Navigate
  const navigate = useNavigate();

  useEffect(() => {
    if (shouldRedirect) navigate('/');
  });

  // Handle form submission
  const handleSubmit = async (event) => {
    // Prevent page reload
    event.preventDefault();

    // Set options for fetch POST
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(loginCredentials),
    };
    // send post request to login with json payload
    try {
      const response = await fetch(
        'http://localhost:8080/login',
        requestOptions
      );
      // store response
      const data = await response.json();

      // handle server error message
      if (data.message) return setErrorMessage(data.message);

      // set app component state with API JSON token
      setAuthToken(data.token);

      // store auth token in local storage
      localStorage.setItem('authToken', JSON.stringify(data.token));

      // Redirect to home
      setShouldRedirect(true);
    } catch (error) {
      console.log('Error with login');
    }
  };

  // Store login form username/password in state
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
        {errorMessage && (
          <div className='LoginForm__ErrorMessage'>{errorMessage}</div>
        )}
      </form>
    </div>
  );

  return renderForm;
};

export default LoginForm;
