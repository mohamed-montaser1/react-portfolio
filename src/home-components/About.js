import React from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function About() {
  return (
    <>
      <div className="about" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="special-heading" data-aos="fade-right">
                Who Am I
              </h2>
              <p data-aos="fade-in">
                Hello Iam Mohamed Montaser Iam From Egypt I Work As FullStack
                Dev... <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
