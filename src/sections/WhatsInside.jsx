import React from "react";
import "./WhatsInside.scss";
import whatsInsideImage from "../assets/images/whats-inside.png";
import Button from "../components/Button";

const WhatsInside = () => (
  <section className="whats-inside">
    <img src={whatsInsideImage} alt="Meal Kit" />
    <div className="content">
      <h2>What's inside each box?</h2>
      <ul>
        <li>Easy-to-follow recipes with clear nutritional info</li>
        <li>High-quality ingredients sourced straight from the farm</li>
        <li>Convenient meal kits that fit perfectly in the fridge</li>
        <li>A fun cooking experience that makes you feel unstoppable</li>
        <li>Innovative packaging designed to reduce waste</li>
      </ul>
      <Button fullWidth>View our plans</Button>
    </div>
  </section>
);

export default WhatsInside;
