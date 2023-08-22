import React from "react";

const HeroBar = () => {
  const bar_data = [
    {
      value: "50,000+",
      name: "Customers",
    },
    {
      value: "5+",
      name: "Industries",
    },
    {
      value: "6+",
      name: "Years",
    },
    {
      value: "50+",
      name: "Integrations",
    },
    {
      value: "100k+",
      name: "Downloads",
    },
  ];
  return (
    <div className="hero-bar">
      <div className="herobar-container container">
        {bar_data.map((val, i) => {
          return (
            <div className="data-box" key={i}>
              <div className="value">{val?.value}</div>
              <div className="name">{val?.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HeroBar;
