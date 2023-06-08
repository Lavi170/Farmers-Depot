import React, { useState } from 'react'
import {getDocs,collection, deleteDoc, doc, updateDoc} from 'firebase/firestore'
import { auth, db } from './firebase-config'
import './myproducts.css'
function MyProducts({cropList}) {
const [editAmount,setEditAmount]=useState();
const [editPrice,setEditPrice]=useState();

  const deleteCrop= async(id)=>{
    const cropDoc1 = doc(db,"crops",id)
    await deleteDoc(cropDoc1)
  };
  const editCrop= async(id)=>{
    const cropDoc2 = doc(db,"crops",id)
    await updateDoc(cropDoc2,{amount:editAmount,price:editPrice})
  };
  return (
    <div>
      <h1 id='title' >my products</h1>
    <div id='myproducts-div'>
          {cropList.map((crop)=>(
            <div className='crop-container'>
          <h3>crop type:{crop.cropName} </h3>
          <p>amount:{crop.amount} .kg</p>
          <p>price:{crop.price} $ per kg</p>
          <button onClick={()=>deleteCrop(crop.id)} className='btns'>delete crop</button>
          <input placeholder='edit amount...' className='btns' onChange={(e)=>{setEditAmount(e.target.value)}}></input>
          <input placeholder='edit price...' className='btns' onChange={(e)=>{setEditPrice(e.target.value)}}></input>
          <button onClick={()=>editCrop(crop.id)} className='btns'>edit</button>
        </div>
      ))}
    </div>
    </div>
  )
}

export default MyProducts