import React from 'react';
import Product_1 from "../images/prod-1.png";
import Product_2 from "../images/prod-2.png";
import Product_3 from "../images/prod-4.png";
import Product_4 from "../images/prod-3.png";
import Product_5 from "../images/prod-5.png";
import Product_6 from "../images/prod-6.png";
import Product_7 from "../images/prod-7.png";
import Product_8 from "../images/prod-8.png";
import Product_9 from "../images/prod-9.png";

export default function Product() {
    
    const scrollLeft = () => {
        document.querySelector('.products').scrollBy({
            left: -500,
            behavior: 'smooth'
        });
    }

    const scrollRight = () => {
        document.querySelector('.products').scrollBy({
            left: 500,
            behavior: 'smooth'
        });
    }

    return (
        <div className="product-body">
            <div className="product-header">
                <h1>Best of Electronics</h1>
                <button className="link-button">
                    <i className="fa fa-angle-right"></i>
                </button>
            </div>
            <div className="scroll-container">
                <button className="scroll-button left" onClick={scrollLeft}><i className="fa fa-angle-left"></i></button>
                <div className="products">
                    <div className="product">
                        <img src={Product_1} className="product-png" alt="Best Smartwatches" />
                        <h3>Best Smartwatches</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_2} className="product-png" alt="Best True Wireless Headphones" />
                        <h3>Best True Wireless Headph...</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_3} className="product-png" alt="Top Mirrorless Cameras" />
                        <h3>Top Mirrorless Cameras</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_4} className="product-png" alt="Best Selling Mobile Speakers" />
                        <h3>Best Selling Mobile Spe...</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_5} className="product-png" alt="Best Selling Security Software" />
                        <h3>Best Selling Security Soft...</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_6} className="product-png" alt="Best Selling Projectors" />
                        <h3>Best Selling Projectors</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_7} className="product-png" alt="Top Selling Monitors" />
                        <h3>Top Selling Monitors</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_8} className="product-png" alt="Best Extensible Disks" />
                        <h3>Best Extensible Disks</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                    <div className="product">
                        <img src={Product_9} className="product-png" alt="Best Portable Keyboards" />
                        <h3>Best Portable Keyboards</h3>
                        <h3><b>Grab Now</b></h3>
                    </div>
                </div>
                <button className="scroll-button right" onClick={scrollRight}><i className="fa fa-angle-right"></i></button>
            </div>
        </div>
    );
}
