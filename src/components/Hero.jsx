import React from "react";
import "../Styles/Hero.css";

const Hero = () => {
  return (
    <div className="hero">
      <div>
        <div className="sub-hero">
          <h2>HOW MUCH COULD YOU SAVE?</h2>
          <p>
            Answer the questions below to get a fixed price quotation for us to
            take your accountancy hassles away from you.
          </p>
        </div>
        <div className="box">
          <p>Is your turnover expected to be more than £85k?</p>
          <div className="btn">
            <button>Yes</button>
            <button>No</button>
          </div>
          <p id="par">okes less than 30 seconds</p>
        </div>
      </div>

      <div>
        <img className="img1" src="pathbg2.png" alt="" />
        {/* <img className='img2' src="Pathbg.png" alt="" /> */}
        <img className="img3" src="hero1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
