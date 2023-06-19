import React, { useState } from 'react'
import './addproduct.css'
import { addDoc } from 'firebase/firestore'
import { auth, db } from './firebase-config'
import { collection } from 'firebase/firestore';
function AddProducts({ farmersList, getFarmerList, setFarmersList }) {
  const [croptype, setCropType] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const crops = collection(db, "crops");

console.log(auth?.currentUser);

  const addProduct = async () => {
    try {
      if (auth?.currentUser) {

        const newCrop = {
          cropName: croptype,
          price: Number(price),
          amount: Number(amount),
          farmerId: auth.currentUser.uid
        };

        await addDoc(crops, newCrop)
        getFarmerList();
        window.location.reload();
      }
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div id='main-div'>
      <div className='form'>
        <h1>Add new crop</h1>
        <div className='input-container'>
          <span>crop name:</span>
          <input type="text" placeholder=' insert crop' onChange={(e) => setCropType(e.target.value)} />
        </div>
        <div className='input-container'>
          <span>amount:</span>
          <input type="text" placeholder='insert anount' onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className='input-container'>
          <span>price:</span>
          <input type="text" placeholder=' insert price' onChange={(e) => setPrice(e.target.value)} />
        </div>
        <button id='btn-submit' onClick={addProduct}>Add</button>
      </div>
    </div>
  )
}

export default AddProducts