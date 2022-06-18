import './Register.css';
import React, { useState, useEffect } from 'react';

const Register = () => {
  // State
  const [formData, setFormData] = useState({});
  const [passwordMatch, setPasswordMatch] = useState(true);
  const [correctDateFormat, setCorrectDateFormat] = useState(true);

  /* Use effect hook with dependencies runs everytime password / DOB fields change
     thanks to the dependency array
  */
  useEffect(() => {
    // Validate passwords match
    const pass1 = formData.password;
    const pass2 = formData.confirmPassword;

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
  }, [formData.password, formData.confirmPassword, formData.DOB]);

  const handleInputChange = (event) => {
    const inputName = event.target.name;
    const inputValue = event.target.value;
    setFormData({ ...formData, [inputName]: inputValue });
  };

  const handleSubmit = (event) => {
    // Prevent form default on submit
    event.preventDefault();
    // TODO create a validated object from form data
    // TODO send a post request with object in json format
    if (!passwordMatch || !correctDateFormat) {
      return console.log('Form validation failed');
    } else {
      console.log('Form validation success!');
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
