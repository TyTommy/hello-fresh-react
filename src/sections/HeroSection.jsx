import React from "react";
import "./HeroSection.scss";
import Button from "../components/Button";

const HeroSection = () => (
  <section className="hero">
    <div className="hero-text">
      <h1>Take the stress out of mealtime</h1>
      <p>America's Most Popular Meal Kit</p>
      <Button>View our plans</Button>
    </div>
  </section>
);

export default HeroSection;
