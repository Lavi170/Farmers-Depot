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
    console.log(currentProduct);
  }
  return (
    <div>
      {/* <div className="big-product-page">
        <div className="Product-card" key={index}>
          <div className="Product-card-img-one">
            <Link to={`${item.name}`}></Link>
          </div>
          <div className="Product-card-text-one">
            <h3>{item.name} </h3>
            <br />
            <span>{`${item.experience} Years Of Experience|`}</span>
            <span> {`${item.Product1.productName}:`}</span>
          <span>{` ${item.Product1.amount}`} </span>
          <span>{` ${item.Product2.productName}`} </span>
          <span>{` ${item.Product2.amount}`} </span>
          <span>{` ${item.Product3.productName}`} </span>
          <span>{` ${item.Product3.amount}`} </span>
            <br />
            <div className="App"></div>
          </div>
        </div>
      </div> */}
        {currentProduct?.name}
        <br />
        <br />
        {currentProduct?.discription}
        <br />
        <br />
        {currentProduct?.harvest}
    </div>
  );
};

export default Products;
