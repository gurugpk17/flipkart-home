import React, { useState, useEffect } from 'react';
import S_image_1 from "../images/s-image1.webp";
import S_image_2 from "../images/s-image2.webp";
import S_image_3 from "../images/s-image3.webp";
import S_image_4 from "../images/s-image4.webp";
import S_image_5 from "../images/s-image5.webp";


export default function Slideshow () {
    const [slideIndex, setSlideIndex] = useState(1);

    const slides = [
        S_image_1,
        S_image_2,
        S_image_3,
        S_image_4,
        S_image_5
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setSlideIndex(prevIndex => (prevIndex >= slides.length ? 1 : prevIndex + 1));
        }, 2500);
        return () => clearInterval(interval);
    }, [slides.length]);

    const plusDivs = (n) => {
        let newIndex = slideIndex + n;
        if (newIndex > slides.length) newIndex = 1;
        if (newIndex < 1) newIndex = slides.length;
        setSlideIndex(newIndex);
    };

    const currentDiv = (n) => {
        setSlideIndex(n);
    };

    return (
        <div className="slideshow-container">
            <div className="slideshow-content">
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        className="my-slides"
                        src={slide}
                        style={{ display: slideIndex === index + 1 ? 'block' : 'none', width: '100%' }}
                        alt={`Slide ${index + 1}`}
                    />
                ))}
                <div className="slideshow-controls">
                    <button className="scroll-button-left" onClick={() => plusDivs(-1)}>&#10094;</button>
                    {slides.map((_, index) => (
                        <span
                            key={index}
                            className={`slideshow-badge demo ${slideIndex === index + 1 ? ' slideshow-active' : ''}`}
                            onClick={() => currentDiv(index + 1)}
                        ></span>
                    ))}
                    <button className="scroll-button-right" onClick={() => plusDivs(1)}>&#10095;</button>
                </div>
            </div>
        </div>
    );
};


