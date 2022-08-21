import React from "react";
import "../App.css";
import HiringImg from "../imgs/hiring.svg";

function Hiring() {
  return (
    <>
      <section className="hiring" id="hiring">
        <h2 className="special-heading" data-aos="fade-right">
          Hiring
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-7 col-lg-6">
              <h3>The Age Is Just A Number</h3>
              <p>
                Hello my name is Mohamed Montaser I am from Egypt I am 14 years
                old I have 1 year experience I think age is just a number I can
                do the website you are thinking with very good user interface
                and creative design you can see Project Ido{" "}
                <a href="work.js">Work</a>
              </p>
              <a href="https://wa.me/01552882142" className="btn hire">
                Hire Me
              </a>
            </div>

            <div className="col-sm-12 col-md-5 col-lg-6">
              <img src={HiringImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hiring;
