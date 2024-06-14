import React from "react";
import "./Header.scss";
import logo from "../assets/images/logo.png";
import Button from "../components/Button";

const Header = () => (
  <header className="header">
    <nav>
      <img src={logo} alt="HelloFresh Logo" className="logo" />
      <ul>
        <li>
          <a href="#plans">Our Plans</a>
        </li>
        <li>
          <a href="#how-it-works">How It Works</a>
        </li>
        <li>
          <a href="#menus">Our Menus</a>
        </li>
        <li>
          <a href="#gift-cards">Gift Cards</a>
        </li>
        <li>
          <a href="#sustainability">Sustainability</a>
        </li>
        <li>
          <a href="#thanksgiving-box">Thanksgiving Box</a>
        </li>
      </ul>
    </nav>
    <Button variant="outline">Log in</Button>
  </header>
);

export default Header;
