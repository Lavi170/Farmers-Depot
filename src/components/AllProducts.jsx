import React, { useState } from 'react'
import "./AllProducts.css"
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import tomatoes from "../pictures/tomatoes.jpg"
import cotton from "../pictures/cotton.jpg"
import Watermellon from "../pictures/Watermelon.jpg"
import potato from "../pictures/potato.jpg"
import cucumber from "../pictures/cucumber.jpg"
import onion from "../pictures/onion.jpg"
import garlic from "../pictures/garlic.jpg"
import pepper from "../pictures/pepper.jpg"
import carrot from "../pictures/carrot.jpg"
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { getDocs, collection, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import { db,auth } from './firebase-config'
const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};
const products = [
  {
    id: 1,
    type: "tomato",
    image: tomatoes,
    headline: 'Fresh Tomatoes',
    description: 'Delicious, juicy tomatoes straight from our farm. Bursting with flavor and perfect for salads, sauces, and more.',
  },
  {
    id: 2,
    type: "cotton",
    image: cotton,
    headline: 'High Quality Cotton',
    description: 'Our great cotton is a premium, high-quality fiber known for its softness, durability, and versatility, making it perfect for a wide range of applications including clothing, home textiles, and industrial use.',
  },
  {
    id: 3,
    type: "watermellon",
    image: Watermellon,
    headline: 'Watermellons',
    description: 'Our great watermelon is a refreshing and juicy fruit, bursting with sweet and thirst-quenching flavors, making it the perfect summer treat for all ages.',
  },
  {
    id: 4,
    type: "potato",
    image: potato,
    headline: 'Potato',
    description: ' Our great potatoes are hearty and versatile, offering a delicious and satisfying addition to any meal, whether baked, mashed, or fried, providing comfort and nourishment with every bite.',
  },
  {
    id: 5,
    type: "cucamber",
    image: cucumber,
    headline: 'Fresh Cucumber',
    description: 'Our cucumbers are crisp and refreshing, bursting with a cool and invigorating flavor that adds a delightful crunch to salads and sandwiches, offering a hydrating and healthy treat for all.',
  },
  {
    id: 6,
    type: "onion",
    image: onion,
    headline: 'Onions',
    description: 'Our onions are renowned for their pungent and distinctive flavor, adding a savory and aromatic touch to various dishes, while providing a versatile ingredient for both cooking and garnishing.',
  },
  {
    id: 7,
    type: "garlic",
    image: garlic,
    headline: 'Garlic',
    description: 'Our garlic is highly prized for its bold and robust flavor, lending a powerful and aromatic essence to culinary creations, while also boasting numerous health benefits and being a staple ingredient in many cuisines worldwide.',
  },
  {
    id: 8,
    type: "pepper",
    image: pepper,
    headline: 'Fresh Peppers',
    description: 'Our peppers are vibrant and full of flavor, offering a delightful balance of sweetness and heat, making them a versatile ingredient that adds a colorful kick to a variety of dishes.',
  },
  {
    id: 9,
    type: "carrot",
    image: carrot,
    headline: 'Carrots',
    description: 'Our carrots are crisp and sweet, packed with nutrients and vibrant orange color, making them a healthy and delicious choice for snacking or incorporating into your favorite recipes.',
  }
];

function AllProducts({ cropList }) {
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [open, setOpen] = React.useState(false);
   const navigate=useNavigate();
  const[setamount,setAmount]=useState()
  const editCrop = async (id) => {
    const cropDoc2 = doc(db, "crops", id)
    await updateDoc(cropDoc2, { amount: setamount })
    navigate("/layout/payment")
  };
  return (
    <div className="product-page">
      <h1 style={{ textAlign: "center", marginBottom: "5px" }}>Our Products</h1>
      {/* <div className="card-container">
          {products.map((product) => (
            <div className="card" key={product.id}>
             <Link to={`/allproducts/${product.type}`}> <img src={product.image} alt={product.headline} /> </Link>
              <h2>{product.headline}</h2>
              <p>{product.description}</p><br></br>
              <button className="button-17" role="button">Buy Now</button>
            </div>
          ))}
        </div> */}
      <div id='myproducts-div'>
        {console.log(cropList)}
        {cropList.map((crop) => (
          <div className='crop-container'>
            <h3>crop type:{crop.cropName} </h3>
            <p>amount:{crop.amount} .kg</p>
            <p>price:{crop.price} $ per kg</p>
            <input placeholder='enter amount...' className='btns' onChange={(e)=>{setAmount(e.target.value)}}></input>
            <button onClick={() => editCrop(crop.id)} className='btns'>buy</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AllProducts
