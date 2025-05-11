import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useRef, useState } from 'react'
import { useAuth } from '../../context/AuthContext';
import './register.scss'

export default function Register() {
    //to store the email address that we are typing for registration
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const emailRef = useRef();
    const passwordRef = useRef();
    const navigate = useNavigate();
    const { register } = useAuth();

    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const handleFinish = async (e) => {
        e.preventDefault();
        setError('');
        try {
            await register(email, passwordRef.current.value);
            setSuccess(true);
            setTimeout(() => navigate('/login'), 2000);
        } catch (err) {
            setError(err.message);
        }
    }

    const handleSignIn = () => {
        navigate('/login');
    }

  return (
    <div className='register'>
      <div className="top">
        <div className="wrapper">
            <img className='logo'
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="" />
            <button className="loginButton" onClick={handleSignIn}>
                Sign In
            </button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited movies, TV shows and more.</h1>
        <h2>Watch anywhere, Cancel anytime</h2>
        <p>
            Ready to watch? Enter your email to create or restart your membership.
        </p>
        {success ? (
            <div style={{ color: 'green', margin: '20px 0' }}>
                Registration successful! Redirecting to login...
            </div>
        ) : !email ? (
            <div className="input">
                <input type="email" placeholder='email address' ref={emailRef}/>
                <button className='registerButton' onClick={handleStart}>Get Started</button>
            </div>
        ) : (
            <form className="input" onSubmit={handleFinish}>
                <input type="password" placeholder='password' ref={passwordRef} required />
                <button className='registerButton' type="submit">
                    Start 
                </button>
                {error && <div style={{ color: 'red', margin: '10px 0' }}>{error}</div>}
            </form>
        )}
      </div>
    </div>
  )
}
