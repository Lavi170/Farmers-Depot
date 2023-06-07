import React from 'react'
import './addproduct.css'
function AddProducts() {
  return (
    <div id='main-div'>
    <div className='form'>
        <h1>Add new crop</h1>
        <div className='input-container'>
        <span>crop name:</span>
        <input type="text" placeholder=' insert crop' />
        </div>
        <div className='input-container'>
        <span>amount:</span>
        <input type="text" placeholder='insert anount' />
        </div>
        <div className='input-container'>
        <span>price:</span>
        <input type="text" placeholder=' insert price' />
        </div>
        <button id='btn-submit'>Add</button>    
    </div>
</div>
  )
}

export default AddProducts