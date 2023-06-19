import React from 'react'
import TextField from '@mui/material/TextField';
import { Link, useNavigate } from 'react-router-dom';
import './userpage.css'
import { useState } from 'react';
import { db,auth } from './firebase-config'
import { getDocs, collection, getDoc } from 'firebase/firestore'
function Loginpage({ isloggedout, setloggedout,cropList,farmer }) {
  const navigate = useNavigate()
  const [email, setemail] = useState()
  const [usePassword, setUserPassword] = useState()
  console.log(cropList)
  return (
    <div className='Login-page'>
      <h2>Login</h2>
      <TextField id="filled-basic" label="email" variant="filled" className='user-inputs' type='email' onChange={(e)=>setemail(e.target.value)}/>
      <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs' type='password' onChange={(e)=>setUserPassword(e.target.value)}/>
      <button className='user-buttons' onClick={()=>handleLogin}>Login</button>
      <p style={{color:"black"}}>Not a member?<Link to='Signup'>Sign up here</Link></p>
    </div>
  )
}


export default Loginpage

