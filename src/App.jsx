import React from "react";
import Header from "./sections/Header";
import HeroSection from "./sections/HeroSection";
import WhyHelloFresh from "./sections/WhyHelloFresh";
import WhatsInside from "./sections/WhatsInside";
import Recipes from "./sections/Recipes";
import SocialProof from "./sections/SocialProof";
import FAQ from "./sections/FAQ";
import Footer from "./sections/Footer";

const App = () => (
  <>
    <Header />
    <HeroSection />
    <WhyHelloFresh />
    <WhatsInside />
    <Recipes />
    <SocialProof />
    <FAQ />
    <Footer />
  </>
);

export default App;
