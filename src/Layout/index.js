import React from "react";
import Headers from "./Header";
import Footer from "./Footer";

const LandingLayout = ({ children }) => {
  return (
    <>
      <Headers />
      <div className="landing-page-container">{children}</div>
      <Footer />
    </>
  );
};

export default LandingLayout;
