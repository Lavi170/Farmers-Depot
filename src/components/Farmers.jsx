import React from "react";
import { Link, useParams } from "react-router-dom";
const Farmers = ({ data }) => {
  console.log(data);
  return (
    <div className="big-product-page">
      {data &&
        data.farmers.map((item, index) => {
          return (
            <div className="Product-card" key={index}>
              <div className="Product-card-img-one">
                <Link to={`${item.name}`}></Link>
              </div>
              <div className="Product-card-text-one">
                <h3>{item.name} </h3>
                <br />
                <span>{`${item.experience} Years Of Experience|`}</span>
                <span> {`${item.Product1?.productName}:`}</span>
                <span>{` ${item.Product1?.amount}`} </span>
                <span>{` ${item.Product2?.productName}`} </span>
                <span>{` ${item.Product2?.amount}`} </span>
                <span>{` ${item.Product3?.productName}`} </span>
                <span>{` ${item.Product3?.amount}`} </span>
                <br />
                <div className="App"></div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Farmers;
