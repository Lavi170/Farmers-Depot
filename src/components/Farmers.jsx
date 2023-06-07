import React from 'react'
import './farmers.css'
import { Link } from 'react-router-dom'
function Farmers() {
  return (
    <div className='container1'>
        <div>welcome moshe</div>
        <div className='link-container'>
            <Link to={"myproducts"}>
        <div className='link-div'>
            Log in
        </div>
            </Link>
            <Link to={"addproduct"}>
        <div className='link-div'>
            Sign up
        </div>
            </Link>
        </div>
    </div>
  )
}

export default Farmers