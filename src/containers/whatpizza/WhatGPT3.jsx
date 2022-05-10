import React from 'react';
import Feature from '../../components/feature/Feature';
import './whatGPT3.css';

const WhatPizza = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Peperoni" text="pizza/ or a bocce ball/volleyball court. He also has a $1.5M pool on his grounds." />
      <Feature title="Cheese" text="There are many ways to make a pizza sauce. The main ingredient in the sauce is tomato." />

    </div>
  </div>
);

export default WhatPizza;
