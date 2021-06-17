import { formatAmount } from "../../utils/format";
import { useParams } from "react-router-dom";
import "./ProductDetail.css";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ProductDetail() {

  const { productId } = useParams();
  const [product, setProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);


  //Getting product details...
  useEffect(() => {

    const fetchProductById = async() => {

      setIsLoading(true);

      try {
        const res = await axios.get(`http://localhost:3001/store/${productId}`);
        
        if (res?.data?.product) {
            setProduct(res.data.product);
        } else {
            setError("Product not found");
        }

      } catch (err) {
            console.log({err})
      }
      
      setIsLoading(false);    
    }

    fetchProductById();

  }, [productId])


  //TODO: Need to update!!i
  //rendering the product content
  const renderProductContent = () => {

    if (isLoading) return <h1>Loading...</h1>
    if (error) return <p className="description">No transaction found</p>

    return (
      <>
        <div className="title">
            <h3>{product?.name}</h3>
            <p className="price">{formatAmount(product?.price)}</p>
        </div>
        <p className="description">{product?.description}</p>
        <br></br>
        <div className="quantity">
            <span className="material-icons">remove</span>          
            <span><p> # </p></span>
            <span className="material-icons">add</span>
        </div>
      </>
    )
  }


  return (
    <div className="ProductDetail">
      <div className="card">
        <img alt={`${product?.name} pic`} src={product?.image} />
        <div className="info">
          {renderProductContent()}
        </div>
      </div>
    </div>
  )
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