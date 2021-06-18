import { formatAmount } from "../../utils/format";
import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./Product.css";

import ProductDetail from "../ProductDetail/ProductDetail";


export default function Product({ key, item }) {

  const [quantity, setQuantity] = useState(0);

  // const [order, setOrder] = useState({
  //   cart: [],
  // })

  function add() {
    setQuantity(quantity + 1)
  }

  function subtract() {
    if (quantity !== 0){
      setQuantity(quantity - 1);
    }
  }


  useEffect(() => {

    const addToCart = async() => {

     
    }

    addToCart();

  }, [quantity])

  
  return (
    <div className="Product">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <Link to={`/store/${item.id}`} >
        <img alt={`${item.name} pic`} src={item.image} />
      </Link>
        <div className="info">
            <p className="name">{item.name}</p>
            <p className="price">{formatAmount(item.price)}</p>
        </div>
      <div className="quantity">
        <span className="material-icons" onClick={subtract}>remove</span>          
        <span><p> {quantity} </p></span>     
        {/* <span className="hidden"><ProductDetail quantity={quantity}/></span> */}
        {/* <ProductDetail quantity={quantity}/> */}
        <span className="material-icons" onClick={add}>add</span>
      </div>
    </div>
  );

}


/*
{
    "id": 1,
    "name": "Rice Krispies",
    "image": "https://upload.wikimedia.org/wikipedia/commons/c/cd/RKTsquares.jpg",
    "description": "Delicious corn-based rice grains melted together with marshmallows into a square-like shape.",
    "price": 0.99
}
*/