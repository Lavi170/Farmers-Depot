import React, { useState } from 'react'
import './addproduct.css'
import { addDoc,getDocs,collection,setDoc,doc,updateDoc,getDoc } from 'firebase/firestore'
import {db} from './firebase-config'
function AddProducts({ farmersList,farmerList,getfarmerslist,setFarmersList}) {
  const [croptype, setCropType] = useState("");
  const [amount, setAmount] = useState("");
  const [price, setPrice] = useState("");
  const farmers = doc(db, "crops", "farmers");
  const addProduct = async () => {
    const updatedFarmersList = [...farmersList];
    console.log(updatedFarmersList)
    const newCrop = {
      price: Number(price),
      amount: Number(amount)
    };
    const updatedCrops = {
      ...updatedFarmersList[0].usersCrops.cropID, // Copy existing crops for the farmer
      [croptype]:newCrop  // Add the new crop using computed property syntax
    };
    console.log(updatedCrops)
    updatedFarmersList[0].usersCrops.cropID=updatedCrops; 
       setFarmersList(updatedFarmersList)
       console.log(farmersList)
    try {
      console.log('hey');
      await updateDoc(farmers,{farmersList});
      console.log(farmersList);
      getfarmerslist();
    }
    catch (err) {
      console.error(err);
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