import { Link, useNavigate } from "react-router-dom";
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import './login.scss'

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      await login(email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className='login'>
      <div className="top">
        <div className="wrapper">
            <img className='logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="" />
            
        </div>
      </div>
      <div className="container">
        <form onSubmit={handleSubmit}>
          <h1>Sign In</h1>
          <input type="email" placeholder='email' value={email} onChange={e => setEmail(e.target.value)} required />
          <input type="password" placeholder='password' value={password} onChange={e => setPassword(e.target.value)} required />
          <button className="loginButton" type="submit">Sign In</button>
          {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
          New to Netflix?<Link to="/Register">Sign up now.</Link>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a bot.
            <b>Learn more.</b>
          </small>
        </form>
      </div>
    </div>
  )
}
