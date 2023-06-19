import React, { useEffect, useState } from "react";
import "./Products.css";
import { Link, useParams } from "react-router-dom";
const Products = ({ value, setValue }) => {
  const [currentProduct, setcurrentProduct] = useState();
  let { productName } = useParams();
  useEffect(() => {
    const foundProduct = value?.find((obj) => obj.name == productName);
    setcurrentProduct(foundProduct);
  }, [value]);
  if (!currentProduct) {
    return <div>Loading...</div>;
  }
  return (
   <div className="big-container">
        <div className="description-page">
      <h1 className="headline">{currentProduct?.name}</h1>
      <div className="explanation-section">
        <p style={{color:"white"}}>
          {currentProduct?.discription}
        </p>
      </div>
      <div className="explanation-section">
        <h1 style={{color:"snow"}}>How Do We Harvest?</h1>
        <br />
        <p style={{color:"white"}}> 
        {currentProduct?.harvest}
        </p>
      </div>
    </div>
     </div>
  );
};

export default Products;

