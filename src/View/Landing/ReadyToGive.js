import React from "react";

const ReadyToGive = () => {
  return (
    <div className="ready-try-container container">
      <div className="ready-box">
        <div className="row">
          <div className="col-md-12 col-lg-7 ready-try-set">
            <div className="content-box">
              <div className="heading-bx">Ready To Give It A Try?</div>
              <div className="desc-box">
                We are the industry standard for POS solutions meeting your
                business needs with tailored approach and 24*7 customer support.
                When you’re ready to experience the best, feel free to fill out
                the form for a demo and our experts will call you shortly.
              </div>
              <div className="button-box">
                <button className="btn btn-filled-2">Contact Sales</button>
                &nbsp;&nbsp;
                <div className="google-play-btn">
                  <img
                    src="./images/google-play.png"
                    alt="google-play download btn"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-12 col-lg-5">
            <div className="ready-img-box">
              <img
                src="./images/ready-try.png"
                alt="ready-to-try"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadyToGive;
