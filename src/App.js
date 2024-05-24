import React from 'react';
import './App.css';
import Nav from "./components/Nav.js";
import Body from "./components/Body.js";
import Product from "./components/ad.js"
import Slideshow from "./components/slideshow.js"

export default function App() {
  return (
    <div className="App">
      <Nav/>
      <Body/>
      <Slideshow/>
      <Product/>
    </div>
  )
}