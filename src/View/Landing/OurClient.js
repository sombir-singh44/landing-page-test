import React from "react";

const OurClient = () => {
  const comment_data = [
    {
      name: "Chima Uba",
      desg: "QSR Head",
      location: "Heineken, Nigeria",
      desc: "We explored numerous POS solutions for our pubs and grocery stores, but none provided us with the ideal fit until we discovered this software. The Billing Software solution is highly flexible and reasonably priced.",
    },
    {
      name: "Chima Uba",
      desg: "QSR Head",
      location: "Heineken, Nigeria",
      desc: "We explored numerous POS solutions for our pubs and grocery stores, but none provided us with the ideal fit until we discovered this software. The Billing Software solution is highly flexible and reasonably priced.",
    },
    {
      name: "Chima Uba",
      desg: "QSR Head",
      location: "Heineken, Nigeria",
      desc: "We explored numerous POS solutions for our pubs and grocery stores, but none provided us with the ideal fit until we discovered this software. The Billing Software solution is highly flexible and reasonably priced.",
    },
  ];
  return (
    <div className="client-container container">
      <div align="center" className="client-heading">
        <h2>Our clients love us!</h2>
      </div>
      <div className="commrt-container">
        {comment_data.map((val, i) => {
          return (
            <div key={i} className="comment-box">
              <div className="comment-img">
                <img
                  src="./images/comment-coma.png"
                  alt="comma"
                  className="img-fluid"
                />
              </div>
              <div className="comment-desc">
                We explored numerous POS solutions for our pubs and grocery
                stores, but none provided us with the ideal fit until we
                discovered this software. The Billing Software solution is
                highly flexible and reasonably priced.
              </div>
              <div className="comment-name">Chima Uba</div>
              <div className="comment-desg">QSR Head</div>
              <div className="comment-location">Heineken, Nigeria</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurClient;
