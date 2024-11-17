import React, { useEffect } from 'react'
import { Footer, Blog, Possibility, Features, WhatGpt3, Header, Talents } from "./containers";
import { Brand, Cta, Navbar } from "./components";
import './App.css';
import { data } from './edit/data/export';

const App = () => {

  useEffect(() => {
    const root = document.documentElement;

    // Set colors
    Object.entries(data.colors).forEach(([key, value]) => {
      root.style.setProperty(`--color-${key}`, value);
    });

    // Set fonts
    Object.entries(data.font).forEach(([key, value]) => {
      root.style.setProperty(`--font-${key}`, value);
    });
  }, []);

  return (
    <div className='App'>
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Talents />
      <Footer />
    </div>
  )
}

export default App