import React from 'react'

function MyProducts() {
  return (
    <div>
        <div className='form'>
            <div>Add new crop</div>
            <span>crop name:</span>
            <input type="text" placeholder=' insert crop' />
            <span>amount:</span>
            <input type="text" placeholder='insert anount' />
            <span>price:</span>
            <input type="text" placeholder=' insert price' />
            
        </div>
    </div>
  )
}

export default MyProducts