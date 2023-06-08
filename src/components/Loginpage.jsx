import React from 'react'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import './userpage.css'
import { useState } from 'react';

function Loginpage({ isloggedout, setloggedout }) {
  const navigate = useNavigate()
  const [email, setemail] = useState()
  const [usePassword, setUserPassword] = useState()
  
  return (
    <div className='Login-page'>
      <h2>Login</h2>
      <TextField id="filled-basic" label="email" variant="filled" className='user-inputs' type='email' />
      <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs' type='password'  />
      <button className='user-buttons'>Login</button>
      <p>Not a member?<Link to='Signup'>Sign up here</Link></p>
    </div>
  )
}


export default Loginpage

