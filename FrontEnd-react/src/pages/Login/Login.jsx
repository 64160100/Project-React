import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/login', {
        username,
        password,
      });
      
      // If login is successful and user exists, redirect to Home page
      if (response.status === 200 && response.data.user) {
        navigate('/');
      } else {
        // If user does not exist, show an error message
        setError('User does not exist');
      }
    } catch (error) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form">
        {error && <div className="error">{error}</div>}
        <div className="field">
          <div>Username</div>
          <div>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
        </div>
        <div className="field">
          <div>Password</div>
          <div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
        </div>
        <div className="field">
          <button>Login</button>
        </div>
      </div>
    </form>
  );
}

export default Login;