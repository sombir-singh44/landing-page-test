import React from "react";

const AllinOne = () => {
  const side_one = [
    {
      name: "Quick Bills",
    },
    {
      name: "Billings",
    },
    {
      name: "Inventory Management",
    },
    {
      name: "eStore",
    },
    {
      name: "Khata",
    },
  ];
  const side_two = [
    {
      name: "CRMs & Loyalty",
    },
    {
      name: "Digital Payments",
    },
    {
      name: "Reporting",
    },
    {
      name: "E-way Billing",
    },
    {
      name: "E-Invoicing",
    },
  ];
  return (
    <div className="all-in-one container">
      <div className="heading-box">
        <div className="head-1">
          All-in-one{" "}
          <span
            style={{
              borderBottom: "4px solid #F9D878",
            }}
          >
            POS
          </span>
        </div>
        <div className="head-2">Business Super App</div>
      </div>
      <div className="row align-items-center">
        <div className="col-md-4 col-sm-12  col-lg-3">
          <div className="row">
            {side_one.map((val, i) => {
              return (
                <div className="col-12 " key={i}>
                  <div className=" list-item-container">
                    <div className="list-image">
                      <img
                        src="./images/img1.png"
                        alt="list icons"
                        className="img-fluid"
                      />
                    </div>
                    &nbsp;&nbsp;
                    <div className="list-label">{val?.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="col-md-4 col-sm-12  col-lg-6">
          <div className="phone-image">
            <img
              src="./images/phone-img.png"
              alt="double phone"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-md-4 col-sm-12  col-lg-3">
          <div className="row">
            {side_two.map((val, i) => {
              return (
                <div className="col-12 " key={i}>
                  <div className=" list-item-container">
                    <div className="list-image">
                      <img
                        src="./images/img1.png"
                        alt="list icons"
                        className="img-fluid"
                      />
                    </div>
                    &nbsp;&nbsp;
                    <div className="list-label">{val?.name}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllinOne;
