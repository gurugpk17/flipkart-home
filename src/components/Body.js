import React from 'react';
import Cate_1 from "../images/1.webp"; 
import Cate_2 from "../images/2.webp"; 
import Cate_3 from "../images/3.webp"; 
import Cate_4 from "../images/4.webp"; 
import Cate_5 from "../images/5.webp"; 
import Cate_6 from "../images/6.webp"; 
import Cate_7 from "../images/7.webp"; 
import Cate_8 from "../images/8.webp"; 
import Cate_9 from "../images/9.webp"; 

export default function Body(){
    return (
        <div className="Body">
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_1} className="category-png" alt="Grocery" />
                    <h3>Grocery</h3>
                </button>
            </div>
            <div className="categories2">
                <button className="categories">
                    <img src={Cate_2} className="category-png" alt="Mobiles" />
                    <h3>Mobiles</h3>
                </button>
            </div>
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_3} className="category-png" alt="Fashion" />
                    <h3>Fashion <i className="fa fa-angle-down"></i></h3>
                </button>
                <div className="cate-sub-content">
                    <button className="sub-cate">
                        <h3>Men's Wear</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                    <div className="sub-cate2">
                        <h4>More in Men's Wear</h4>
                        <a href="#none" alt="All">
                            <h3>All</h3>
                        </a>
                        <a href="#none" alt="Men's Formals">
                            <h3>Men's Formals</h3>
                        </a>
                        <a href="#none" alt="Men's Casuals">
                            <h3>Men's Casuals</h3>
                        </a>
                    </div>
                    <button className="sub-cate">
                        <h3>Women's Wear</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                    <button className="sub-cate">
                        <h3>Kid's Wear</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_4} className="category-png" alt="Electronics" />
                    <h3>Electronics <i className="fa fa-angle-down"></i></h3>
                </button>
                <div className="cate-sub-content">
                    <button className="sub-cate">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                    <button className="sub-cate">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_5} className="category-png" alt="Home & Furniture" />
                    <h3>Home & Furniture <i className="fa fa-angle-down"></i></h3>
                </button>
                <div className="cate-sub-content">
                    <button className="sub-cate">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                    <button className="sub-cate">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_6} className="category-png" alt="Appliances" />
                    <h3>Appliances</h3>
                </button>
            </div>
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_7} className="category-png" alt="Travel" />
                    <h3>Travel</h3>
                </button>
            </div>
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_8} className="category-png" alt="Beauty, Toys & More" />
                    <h3>Beauty, Toys & More <i className="fa fa-angle-down"></i></h3>
                </button>
                <div className="cate-sub-content">
                    <button className="sub-cate">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                    <button className="sub-cate">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
            <div className="categories1">
                <button className="categories">
                    <img src={Cate_9} className="category-png" alt="Two Wheelers" />
                    <h3>Two Wheelers <i className="fa fa-angle-down"></i></h3>
                </button>
                <div className="cate-sub-content">
                    <button className="sub-cate">
                        <h3>My Account</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                    <button className="sub-cate">
                        <h3>Super coin Zone</h3>
                        <i className="fa fa-angle-right"></i>
                    </button>
                </div>
            </div>
        </div>
    );
}
