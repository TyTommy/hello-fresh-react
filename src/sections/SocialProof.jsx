import React from "react";
import "./SocialProof.scss";
import user1 from "../assets/images/user1.png";
import user2 from "../assets/images/user2.png";
import user3 from "../assets/images/user3.png";
import user4 from "../assets/images/user4.png";

const SocialProof = () => (
  <section className="social-proof">
    <h2>Cook it. Love it. Tag it #HelloFreshPics</h2>
    <p>Follow us on Instagram @hellofresh</p>
    <div className="social-posts">
      <div className="post">
        <img src={user1} alt="User 1" />
        <h5>bdanielle1285</h5>
        <p>
          My little chef helping me make dinner tonight and trying out some of
          his new kitchen utensils I got him!
        </p>
      </div>
      <div className="post">
        <img src={user2} alt="User 2" />
        <h5>lilpepthekelpie</h5>
        <p>I'm helping out ❤️ #amasterchef #helloboy</p>
      </div>
      <div className="post">
        <img src={user3} alt="User 3" />
        <h5>mandi14eid</h5>
        <p>
          Drew and the kids made mom dinner tonight! Drew and I had our doubts
          but wow was it tasty!
        </p>
      </div>
      <div className="post">
        <img src={user4} alt="User 4" />
        <h5>our_lovely_stride</h5>
        <p>
          We had a cooking class yesterday and we had such an amazing time 😍
          They had such a great time working as a team and I can't wait for our
          weekly cooking class 🤗❤️
        </p>
      </div>
    </div>
  </section>
);

export default SocialProof;
