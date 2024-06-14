import React from "react";
import "./WhyHelloFresh.scss";
import Button from "../components/Button";
import Feature from "../components/FeatureComponent";
import feature1 from "../assets/images/feature1.png";
import feature2 from "../assets/images/feature2.png";
import feature3 from "../assets/images/feature3.png";
import feature4 from "../assets/images/feature4.png";

const features = [
  {
    icon: feature1,
    title: "No skimpin’ on the chicken!",
    description: "Or steak, or fish, or plant protein.",
  },
  {
    icon: feature2,
    title: "No commitment whatsoever",
    description: "Skipping weeks or canceling is super easy.",
  },
  {
    icon: feature3,
    title: "The most 5-star reviews",
    description: "Our huge recipe selection wows week after week.",
  },
  {
    icon: feature4,
    title: "Fresh and affordable",
    description: "Chef-created deliciousness from $7.49 per meal.",
  },
];

const WhyHelloFresh = () => (
  <section className="why-hellofresh">
    <h2>Why HelloFresh?</h2>
    <div className="features">
      {features.map((feature) => (
        <Feature
          key={feature.title}
          icon={feature.icon}
          title={feature.title}
          description={feature.description}
        />
      ))}
    </div>
    <Button variant="outline">Get started</Button>
  </section>
);

export default WhyHelloFresh;
