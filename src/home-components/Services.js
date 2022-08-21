import React from "react";
import "../App.css";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function Services() {
  return (
    <>
      <section className="services" id="services">
        <h2 className="special-heading" data-aos="fade-right">
          Services Ido
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-4" data-aos="fade-in">
              <div className="card">
                <i class="fa-solid fa-pen-ruler"></i>
                <h4>Creative Design</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  animi
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4" data-aos="fade-in">
              <div className="card">
                <i class="fa-solid fa-code"></i>
                <h4>Clean Code</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  animi
                </p>
              </div>
            </div>
            <div className="col-sm-12 col-md-4" data-aos="fade-in">
              <div className="card">
                <i class="fa-brands fa-sketch"></i>
                <h4>User Interface</h4>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
                  animi
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
