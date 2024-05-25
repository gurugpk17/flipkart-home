import React from 'react';
import Product from "./product";
import Ad_image from "../images/ad-image.webp";

export default function Ad() {
    return (
        <div className="Ad-container">
            <Product />
            <img className="ad-image" src={Ad_image} alt="Ad" />
        </div>
    );
}
