import React from 'react'
import { Link } from 'react-router-dom'
import './whoareyou.css'
function WhoAreYou() {
  return (
    <div className='main-container'>
        <h1 className='first-page-h1'>Who Are You?</h1>
        <div className='container'>
        <Link to={"/user"}>
        <div className='main-link-div'>
            Farmer
        </div>
        </Link>
        <Link to={"/layout"}>
        <div className='main-link-div'>
            Consumer
        </div>
        </Link>
        </div>

    </div>
  )
}

export default WhoAreYou