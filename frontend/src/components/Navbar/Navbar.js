// import { useState, useEffect } from "react";
// import axios from "axios";
// import { formatAmount } from "../../utils/format";
import logo from "../../images/logo.png";
import "./Navbar.css";

export default function Navbar() {

  //TODO: Need to change number of items

  return (
    <div className="Navbar">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
      <nav>
        <div className="logo">
          <img src={logo} alt="codepath logo" />
          <h1>Student Store</h1>
        </div>
        <div className="cart">
          <span className="material-icons md-48">shopping_cart</span>          
        </div>
      </nav>
    </div>
  )
}