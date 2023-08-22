import React from "react";

const ProfitableJourney = () => {
  const points_data = [
    {
      title: "A Surprising Sign-up",
      desc: "Jump on the bandwagon with a free 30-day trial! Just drop your business details and explore all features.  ",
    },
    {
      title: "A Surprising Sign-up",
      desc: "Jump on the bandwagon with a free 30-day trial! Just drop your business details and explore all features.  ",
    },
    {
      title: "And voila… A Stellar setup",
      desc: "Whip up your POS system in a flash. Get ready to own your business from any corner of the World in no time.",
    },
  ];
  return (
    <div className="business-type-container container">
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 setting-side-sec">
          <h2 className="journey-heading">
            3, 2, 1 and take off on a profitable journey!
          </h2>
          <div className="journey-desc my-3">
            Get moving with the journey to integrate QueueBuster POS with your
            business.
          </div>
          {points_data.map((val, i) => {
            return (
              <div key={i} className="points-container">
                <div className="list-fix">
                  <div className="point-img">
                    <img
                      src="./images/point1.png"
                      alt="point icons"
                      // width="100%"
                      // height="100%"

                      className="pint-icon-image"
                    />
                  </div>
                  &nbsp;&nbsp;
                  <div className="point-info">
                    <div className="point-heading">{val?.title}</div>
                    <div className="point-desc">{val?.desc}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12">
          <div className="journy-img">
            <img
              src="./images/journy.png"
              alt="journey phone"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfitableJourney;
