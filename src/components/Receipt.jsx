import React from 'react';
import './Receipt.css';
import { Link } from 'react-router-dom';
const Receipt = () => {
  return (
    <div className='recipt-page-main'>
    <div className="receipt-container">
      <h1 className="heading">Thank You for Your Purchase!</h1>
      <p className="message">We appreciate your support and hope you enjoy the products you've purchased from Farmers Depot.</p>
      <p className="message">We look forward to serving you again in the future.</p>
    <Link to="/layout"><button className='button-17'>Home</button></Link>
    </div>
    </div>
  );
};

export default Receipt;