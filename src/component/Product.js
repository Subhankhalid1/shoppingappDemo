import React from 'react';
import {Link} from 'react-router-dom';
import Shoes from './../Shoes.json';
import './Product.css';


function Product() {
  return (
    <div className="App">
  <h1 style={{color:"maroon"}}>Nike For Everyone  </h1>

  <div className="Container">
<h5>Dear Customers! If you have thinking about to buy our product so please click on product.</h5>
   {Object.keys(Shoes).map(KeyName=>{
      const shoe=Shoes[KeyName];
      return(<Link className="link" key={KeyName} to={`/ProductItems/${KeyName}`}>
        <h3>{shoe.name}</h3>
        <img src={shoe.img} width={300} alt="shoe"/>
        {/* <button>Add to cart</button> */}
        </Link>)
    
    })}
    
  </div>
    </div>
  );
}

export default Product;