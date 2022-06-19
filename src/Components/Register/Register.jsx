import './Register.css';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  // State
  const [formData, setFormData] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [correctDateFormat, setCorrectDateFormat] = useState(true);
  const [shouldRedirect, setShouldRedirect] = useState(false);

  // Navigate
  const navigate = useNavigate();

  /**
   *  Use effect hook with dependencies runs everytime password / DOB fields change
   *  thanks to the dependency array
   */
  useEffect(() => {
    //
    const pass1 = formData.password;
    const pass2 = formData.confirmPassword;

    // Validate passwords match
    if (pass1 === pass2) {
      setPasswordMatch(true);
    } else {
      setPasswordMatch(false);
    }

    // Validate date of birth format (mm/dd/yyyy)
    const dateOfBirthRegex = /[0-9]{2}\/[0-9]{2}\/[0-9]{4}/;
    if (dateOfBirthRegex.test(formData.DOB)) {
      setCorrectDateFormat(true);
    } else {
      setCorrectDateFormat(false);
    }

    // Navigate to login page if user registers
    if (shouldRedirect) navigate('/login');
  }, [
    formData.password,
    formData.confirmPassword,
    formData.DOB,
    shouldRedirect,
    navigate,
  ]);

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = async (event) => {
    // Prevent form default on submit
    event.preventDefault();

    /**
     * Confirm form data validation
     * If invalid respond with error
     * If valid post form data json payload to /user
     */
    if (!passwordMatch || !correctDateFormat) {
      console.log('Form validation Fail');
    } else {
      //
      // Set options for fetch POST
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      };

      // send post request to /user with json payload
      try {
        const response = await fetch(
          'http://localhost:8080/user',
          requestOptions
        );
        // store response
        const data = await response.json();

        // Check for returned user
        if (data.user) {
          //
          // Redirect to home
          setShouldRedirect(true);
        }
        // Log error
        else console.log('Failed to create user');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const renderRegisterForm = (
    <div className='RegisterForm__Container'>
      <form className='RegisterForm' onSubmit={handleSubmit}>
        <div className='RegisterForm__Header'>Register</div>
        <div className='RegisterForm__InputContainer'>
          <input
            type='text'
            name='first_name'
            required
            onChange={handleInputChange}
            placeholder='First Name'
          />
        </div>
        <div className='RegisterForm__InputContainer'>
          <input
            type='text'
            name='last_name'
            required
            onChange={handleInputChange}
            placeholder='Last Name'
          />
        </div>
        <div className='RegisterForm__InputContainer'>
          <input
            type='text'
            name='username'
            required
            onChange={handleInputChange}
            placeholder='Username'
          />
        </div>
        <div className='RegisterForm__InputContainer'>
          <input
            type='password'
            name='password'
            required
            onChange={handleInputChange}
            placeholder='Password'
          />
        </div>
        <div className='RegisterForm__InputContainer'>
          <input
            type='password'
            name='confirmPassword'
            required
            onChange={handleInputChange}
            placeholder='Confirm Password'
          />
        </div>
        <div className='RegisterForm__InputContainer'>
          <input
            type='email'
            name='email'
            required
            onChange={handleInputChange}
            placeholder='Email'
          />
        </div>
        <div className='RegisterForm__InputContainer'>
          <input
            type='text'
            name='DOB'
            required
            onChange={handleInputChange}
            placeholder='Date of Birth ( DD/MM/YYYY )'
          />
        </div>
        <div className='RegisterForm__ButtonContainer'>
          <input type='submit' />
        </div>
        {!passwordMatch && (
          <div className='RegisterForm__ErrorMessage'>
            Passwords do not match!
          </div>
        )}
        {!correctDateFormat && (
          <div className='RegisterForm__ErrorMessage'>
            Incorrect date format!
          </div>
        )}
      </form>
    </div>
  );

  return renderRegisterForm;
};

export default Register;
