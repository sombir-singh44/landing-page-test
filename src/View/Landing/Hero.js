import React from "react";

const Hero = () => {
  return (
    <div className="hero-section container">
      <div className="row h-100">
        <div className="col-md-12 col-sm-12 col-lg-6 hero-back">
          <div className="text-container">
            <div className="heading-1">Smart Android POS</div>
            <div className="heading-2">Billing Software</div>
            <div className="description">
              We manage your point of sale and keep everything around your
              business up-to-date with our all-in-one POS App.
            </div>
            <div className="btn-container">
              <button className="btn btn-filled-2">Get Started</button>
              <button
                className="btn btn-border-2"
                style={{ margin: "0px 10px" }}
              >
                Contact Sales
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12 col-sm-12 col-lg-6  hero-img-set">
          <div className="hero-image">
            <img
              src="./images/banner-computer.png"
              alt="Banner Computer"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
