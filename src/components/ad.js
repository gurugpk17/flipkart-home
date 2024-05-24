import React from 'react';
import Product from "./product.js";
import Ad_image from "../images/ad-image.webp";
// import "./Ad.css"; // Import the CSS file for styling

export default function Ad() {
    return (
        <div className="Ad-container">
            <Product />
            <img className="ad-image" src={Ad_image} alt="Ad" />
        </div>
    );
}
