/* eslint-disable */
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Alert from '../Alert';
import './Signup.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [phonenumber, setPhoneNumber] = useState('');
  const [apiError, setApiError] = useState('');
  const [success, setSuccess] = useState(false);

  const signup = async (event) => {
    event.preventDefault();
    try {
      const result = await axios.post('/api/auth/createuser', {
        username,
        password,
        firstname,
        lastname,
        email,
        phonenumber,
      });
      setSuccess(true);
      setFirstName('');
      setLastName('');
      setEmail('');
      setPassword('');
      setPhoneNumber('');
      setUsername('');
      console.log(result);
    } catch (error) {
      console.error(error);
      setApiError(error?.response?.data?.error || 'Unknown Error');
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setApiError('');
    }, 5000); // Timeout set to 5 seconds (5000 milliseconds)

    return () => clearTimeout(timeout);
  }, [apiError]);

  return (
    <div className="login-component">
      <Alert visible={!!apiError} type="error">
        <p>There was an error Updating the profile.</p>
        <p>{ apiError }</p>
      </Alert>
      <Alert visible={success} type="success">
        Thank you for signing up.
        <Link to="/login">
          <p>Login</p>
        </Link>
      </Alert>
      <h2>Sign Up</h2>
      <form onSubmit={signup} style={{ visibility: !success }}>
        <div>
          <label htmlFor="firstname">
            First Name
            <input
              type="text"
              id="firstname"
              value={firstname}
              autoComplete="firstname"
              onChange={(event) => setFirstName(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="lastname">
            Last Name
            <input
              type="text"
              id="lastname"
              value={lastname}
              autoComplete="lastname"
              onChange={(event) => setLastName(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="email">
            Email
            <input
              type="email"
              id="email"
              value={email}
              autoComplete="email@email.com"
              onChange={(event) => setEmail(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="phonenumber">
            Phone Number
            <input
              type="text"
              id="phonenumber"
              value={phonenumber}
              autoComplete="phonenumber"
              onChange={(event) => setPhoneNumber(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="username">
            Username
            <input
              type="text"
              id="username"
              value={username}
              autoComplete="username"
              onChange={(event) => setUsername(event.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              value={password}
              autoComplete="current-password"
              onChange={(event) => setPassword(event.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <div>
        <p>Already have an Account, Please <Link to='/login'>Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
