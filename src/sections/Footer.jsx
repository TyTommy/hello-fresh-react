import React from "react";
import "./Footer.scss";

const Footer = () => (
  <footer className="footer">
    <div className="footer-links">
      <div>
        <h3>HelloFresh</h3>
        <ul>
          <li>
            <a href="#students">Students</a>
          </li>
          <li>
            <a href="#blog">Blog</a>
          </li>
          <li>
            <a href="#recipes">Recipes</a>
          </li>
          <li>
            <a href="#more">More</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Our company</h3>
        <ul>
          <li>
            <a href="#group">HelloFresh Group</a>
          </li>
          <li>
            <a href="#sustainability">Sustainability</a>
          </li>
          <li>
            <a href="#careers">Careers</a>
          </li>
          <li>
            <a href="#press">Press</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Work with us</h3>
        <ul>
          <li>
            <a href="#partner">Partner</a>
          </li>
          <li>
            <a href="#influencers">Influencers</a>
          </li>
          <li>
            <a href="#affiliates">Affiliates</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>Contact us</h3>
        <ul>
          <li>
            <a href="#faq">Help Center & FAQ</a>
          </li>
          <li>
            <a href="#corporate-sales">Corporate Sales</a>
          </li>
        </ul>
      </div>
      <div>
        <h3>
          <a href="#faq">Download our app</a>
        </h3>
        <p>Manage your deliveries from anywhere, anytime.</p>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; HelloFresh 2022</p>
      <ul>
        <li>
          <a href="#terms">Terms and Conditions</a>
        </li>
        <li>
          <a href="#privacy">Privacy</a>
        </li>
        <li>
          <a href="#accessibility">Accessibility</a>
        </li>
      </ul>
    </div>
  </footer>
);

export default Footer;
