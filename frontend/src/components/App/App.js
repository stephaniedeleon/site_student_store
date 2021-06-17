import Home from "../Home/Home";
import ProductDetail from "../ProductDetail/ProductDetail";
import axios from "axios";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect, useState } from 'react';
import './App.css';

export default function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {

    const fetchProducts = async () => {

      try {
        const res = await axios.get("http://localhost:3001/store");
        const products = res?.data?.products;

        console.log({products});

        if(products) {
          setProducts(products);
        }

      } catch(err) {
        console.log(err);
      }
    }

    fetchProducts();

  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <h1>Student Store</h1>

        <Routes>
          <Route path="/" element={<Home products={products}/>} />
          <Route path="/store/:productId" element={<ProductDetail />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}