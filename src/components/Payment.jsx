import React, { useState } from 'react';
import Cards from 'react-credit-cards-2';
import 'react-credit-cards-2/dist/es/styles-compiled.css';
import StarRating from './StarRaiting.jsx';
import { Link } from 'react-router-dom';
const PaymentForm = () => {
    
  const [state, setState] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: '',
    focus: '',
  });

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };

  return (
    <div className="payment-form">
        
      <Cards
        number={state.number}
        expiry={state.expiry}
        cvc={state.cvc}
        name={state.name}
        focused={state.focus}
      />
      <form >
        <dir >
            <input
            type="tel"
            name="number"
            placeholder="Card Number"
            value={state.number}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
        /></dir>
        <dir>
        <input
          type="text"
          name="expiry"
          placeholder="Expiry Date"
          value={state.expiry}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        </dir>
        <dir>
            <input
            type="tel"
            name="cvc"
            placeholder="CVC"
            value={state.cvc}
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            />
        
        </dir>
        <dir>
        <input
          type="text"
          name="name"
          placeholder="Cardholder Name"
          value={state.name}
          onChange={handleInputChange}
          onFocus={handleInputFocus}
        />
        </dir>
      </form>
      <div>
        
      </div>
      <br />
      <div style={{textAlign:"center"}}>
      <StarRating></StarRating></div>
      <button className="button-17" role="button" style={{marginLeft:"46%"}}>
             <Link to={"/layout/receipt"}>Buy Now</Link> 
            </button>
    </div>
  );
};

export default PaymentForm;