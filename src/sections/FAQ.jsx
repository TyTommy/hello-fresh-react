import React from "react";
import "./FAQ.scss";
import downIcon from "../assets/images/down-icon.png";

const questions = [
  "How does HelloFresh's meal kit delivery service work?",
  "Which food meal plans & recipes does HelloFresh offer?",
  "How many times a week does HelloFresh deliver?",
  "Does HelloFresh give nutrition & calorie information?",
  "How do I recycle my HelloFresh box?",
  "Why should I choose HelloFresh as my meal kit service?",
  "How much does HelloFresh cost?",
  "Does HelloFresh support a healthy lifestyle?",
  "Can I skip a week of delivery?",
];
const FAQ = () => (
  <section className="faq">
    <h2>More questions?</h2>
    <ul>
      {questions.map((question) => (
        <li key={question}>
          <img src={downIcon} alt="Down icon" />
          <p>{question}</p>
        </li>
      ))}
    </ul>
  </section>
);

export default FAQ;
