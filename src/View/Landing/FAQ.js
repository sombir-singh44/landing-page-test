import React from "react";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import { Add } from "@mui/icons-material";

const FAQ = () => {
  const array = [1, 2, 3, 4, 5, 6];
  const array2 = [7, 8, 9, 10, 11, 12];

  return (
    <div className="faq-container container">
      <div align="center" className="container-heading">
        <h2>Frequently Asked Questions</h2>
      </div>
      <div className="accordian-container">
        <div className="row">
          <div className="col-md-6">
            {array.map((val, i) => {
              return (
                <div className="col-md-10 m-auto">
                  <Accordion className="accordian-box">
                    <AccordionSummary
                      sx={{ flexDirection: "row-reverse" }}
                      expandIcon={<Add sx={{ color: "red" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="accordion-title">
                        Placeholder for question
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accordion-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
          <div className="col-md-6 hide-responsive">
            {array2.map((val, i) => {
              return (
                <div className="col-md-10 m-auto">
                  <Accordion className="accordian-box">
                    <AccordionSummary
                      sx={{ flexDirection: "row-reverse" }}
                      expandIcon={<Add sx={{ color: "red" }} />}
                      aria-controls="panel1a-content"
                      id="panel1a-header"
                    >
                      <div className="accordion-title">
                        Placeholder for question
                      </div>
                    </AccordionSummary>
                    <AccordionDetails>
                      <div className="accordion-desc">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Suspendisse malesuada lacus ex, sit amet blandit leo
                        lobortis eget.
                      </div>
                    </AccordionDetails>
                  </Accordion>
                </div>
              );
            })}
          </div>
        </div>
        <div className="all-ques-link" align="center">
          View All Question
        </div>
      </div>
    </div>
  );
};

export default FAQ;
