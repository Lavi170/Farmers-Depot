import React from 'react'
import TextField from '@mui/material/TextField';
import { Outlet, Link, useParams, useNavigate } from 'react-router-dom'
import { useState, } from 'react';
import { useRef } from 'react';
import { auth, googleProvider } from './firebase-config'
import { createUserWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
function Signuppage({ isloggedout, setloggedout }) {
  const navigate = useNavigate()
  const [username, setusername] = useState()
  const [email, setemail] = useState()
  const [password, setpassword] = useState()
  const [verify, setverify] = useState()
  const [userObj, setuserObj] = useState({})
  const form = useRef();
  console.log(auth?.currentUser);
  const Signin = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    }
    catch (err) {
      console.error(err);
    }
  }
  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    }
    catch (err) {
      console.error(err);
    }
  }
  const logOut = async () => {
    try {
      await signOut(auth);
    }
    catch (err) {
      console.error(err);
    }
  }

  return (
    <div>
      <div className='sign-page'>
        <h2>Sign-up</h2>
        <TextField style={{ paddingTop: "10px" }} id="filled-basic" label="username" variant="filled" className='user-inputs' type='text' name="user_name" onChange={(e) => { setusername(e.target.value) }} />
        <TextField style={{ paddingTop: "10px" }} id="filled-basic" label="email" variant="filled" className='user-inputs' type='email' name="user_email" onChange={(e) => { setemail(e.target.value) }} />
        <TextField id="filled-basic" label="Password" variant="filled" className='user-inputs' type='password' onChange={(e) => { setpassword(e.target.value) }} />
        <TextField id="filled-basic" label="Confirm Password" variant="filled" className='user-inputs' type='password' onChange={(e) => { setverify(e.target.value) }} />
        <button className='user-buttons' type="submit" value="Sign-up" onClick={Signin}> sign in</button>
        <button className='user-buttons' onClick={signInWithGoogle}>Sign in with google</button>
        <button className='user-buttons' onClick={logOut}>Log out</button>
        {/* <button className='user-buttons' onClick={() => setUser()}>Sign-up</button> */}
        <p>Already a member?<Link to='/user'>Login here</Link></p>
      </div>

    </div>
  )
}
export default Signuppage

