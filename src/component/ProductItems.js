import React from 'react';
import {useParams} from 'react-router-dom';
import Shoes from './../Shoes.json';
function ProductItems() {
  const {id}=useParams();
  const shoe=Shoes[id];
  
  console.log(id);
  if(!shoe){
    return<h3>Product Not Found</h3>
  }
  // const result = Object.keys(shoe).map((key) => shoe[key]);
  // console.log(result);
 
  // function remove(indexe){

  //   result.splice(indexe,1);
  //   var index = result.indexOf(shoe.img);
  //   console.log(index);
    
  // }
  // remove();
  return (
    <div className="App" style={{height:"70vh", marginBottom:"10%"}}>
  <h1 style={{color:"blue"}}> Your Selective Items Here:  </h1>
  <div className="link">
    
        <h3 style={{color:"red"}}>{shoe.name}</h3>
        
        <img src={shoe.img} width={300} alt="shoe"/>
        {/* <button onClick={(id)=>remove()}>Remove</button> */}
       
        </div>
        <br/>
        <h5>Thankyou To Visit Our Online Outlet!</h5>
    </div>
  );
}

export default ProductItems;