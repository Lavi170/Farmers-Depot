import React from 'react'
import { Link } from 'react-router-dom'
import './whoareyou.css'
function WhoAreYou() {
  return (
    <div className='main-container'>
        <h1 style={{fontSize:"10vw"}}>who are you?</h1>
        <div className='container'>
        <Link to={"/farmers"}>
        <div className='link-div'>
            farmer
        </div>
        </Link>
        <Link to={"/consumer"}>
        <div className='link-div'>
            consumer
        </div>
        </Link>
        </div>

    </div>
  )
}

export default WhoAreYou