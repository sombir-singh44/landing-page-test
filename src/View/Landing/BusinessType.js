import React from "react";
import { BsChevronRight } from "react-icons/bs";

const BusinessType = () => {
  const tab_list = [
    {
      name: "Retail",
      color: "#A85443",
    },
    {
      name: "Restaurants",
      color: "#D90429",
    },
    {
      name: "Grocery Stores ",
      color: "#7E9F3C",
    },
    {
      name: "Spa & Salon",
      color: "#7678ED",
    },
    {
      name: "Electronics",
      color: "#204F98",
    },
  ];

  return (
    <div className="business-type-container container">
      <div className="row align-items-center">
        <div className="col-md-6 col-lg-6 col-sm-12 py-2">
          <div className="box-text">
            <span>Business Types</span>
          </div>
          <h2 className="busines-heading">Streamline Business with ease</h2>
          <div className="business-desc my-3">
            There’s no one-size-fit-all in business, so we are here with our
            streamlined customized approach for all business types.
          </div>
          <div className="tab-container">
            {tab_list.map((val, i) => {
              return (
                <div className="tabs d-flex">
                  <div style={{ background: val?.color, color: val?.color }}>
                    |
                  </div>
                  &nbsp;&nbsp;
                  <div className="down-border">
                    <div className="tab-name">{val?.name}</div>
                    <div className="">
                      <BsChevronRight />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-cont">
            <button className="btn btn-border-1">Get Free Demo</button>
          </div>
        </div>
        <div className="col-md-6 col-lg-6 col-sm-12 py-2">
          <div className="business-type-img m-auto">
            <img
              src="./images/business-type.png"
              alt="Business Type"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessType;
