import React from "react";
import { BsTwitter, BsLinkedin, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";

const Footer = () => {
  const company_link = [
    { name: "Homepage", herf: "#" },
    { name: "About Us", herf: "#" },
    { name: "Careers", herf: "#" },
    { name: "Contact US", herf: "#" },
    { name: "Pricing", herf: "#" },
  ];
  const resources_link = [
    { name: "Blogs", herf: "#" },
    { name: "Help and Support", herf: "#" },
    { name: "Privacy Policy", herf: "#" },
    { name: "Terms and Conditions", herf: "#" },
  ];
  const business_link = [
    { name: "Retail POS", herf: "#" },
    { name: "Restaurant POS", herf: "#" },
    { name: "Grocery POS", herf: "#" },
    { name: "Spa & Salon POS", herf: "#" },
    { name: "Electronics POS", herf: "#" },
  ];

  return (
    <div className="footer-container container">
      <div className="row">
        <div className="col-lg-4 col-md-5 col-sm-8 col-xs-12 my-2">
          <div className="company-logo">
            <img
              src="./images/logo.png"
              alt="company logo"
              className="img-fluid"
            />
          </div>
          <div className="detail-box">
            <div className="heading">Address:</div>
            <div className="info" style={{ maxWidth: "300px" }}>
              Unit No. 401, 4th Floor, Pegasus One Tower, Plot No. A-10, Sector
              - 68, Noida, Uttar Pradesh-201307
            </div>
          </div>
          <div className="detail-box">
            <div className="heading">Email:</div>
            <div className="info">contact@xyz.com </div>
          </div>
          <div className="detail-box">
            <div className="heading">Phone:</div>
            <div className="info">011-2324649 </div>
          </div>
        </div>
        <div className="col-lg-2 col-md-3 col-sm-4 col-6 my-2">
          <div className="footer-links-box">
            <div className="heading">Company</div>
            {company_link.map((val, i) => {
              return (
                <div key={i} className="footer-links">
                  {val?.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-6 my-2">
          <div className="footer-links-box">
            <div className="heading">Resources</div>
            {resources_link.map((val, i) => {
              return (
                <div key={i} className="footer-links">
                  {val?.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-6 col-6 my-2">
          <div className="footer-links-box">
            <div className="heading">Business Types</div>
            {business_link.map((val, i) => {
              return (
                <div key={i} className="footer-links">
                  {val?.name}
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-lg-4 col-md-3 col-sm-6 col-xs-12 my-2">
          <div className="footer-links-box">
            <div className="heading">Social</div>
            <div className="social-links">
              <BsTwitter />
              <BsLinkedin />
              <FaInstagramSquare />
              <BsFacebook />
              <BsYoutube />
            </div>
          </div>
        </div>
        <div className="col-lg-6 col-md-6 col-sm-8 col-xs-12 my-2">
          <div className="footer-links-box">
            <div className="heading">Contact</div>
            <div className="footer-links">
              For Any Queries, Please contact us at
            </div>
            <h5>
              <b>+91-987 654 3210</b>
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
