import { Link } from "react-router-dom";
import { useRef, useState } from 'react'
import './login.scss'

export default function Login() {
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
          <form>
            <h1>Sign In</h1>
            <input type="email" placeholder='email or phone number' />
            <input type="password" placeholder='password' />
            <button className="loginButton">Sign In</button>
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
