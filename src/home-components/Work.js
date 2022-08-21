import React from "react";
import "../App.css";
import Error404 from "../imgs/work/404.png";
import Tablet from "../imgs/work/tablet.png";
import CommingSoonPage from "../imgs/work/comming-soon-page.png";
import Mobile from "../imgs/work/mobile.png";
import DemoPortfolio from "../imgs/work/demo-portfolio.png";
import companyWebsite from "../imgs/work/company-website.png";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function Work() {
  return (
    <>
      <section className="my-work" id="work">
        <h2 className="special-heading" data-aos="fade-right">
          My Work
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card">
                <div className="overlay">
                  <h4 className="heading">404 Error</h4>
                  <p className="about-project">
                    this page if http request equal to 404
                  </p>
                  <a
                    href="https://www.github.com/Mahmoud-Montaser/404-error-page"
                    target={"_blank"}
                  >
                    Github
                  </a>
                </div>
                <img src={Error404} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card">
                <div className="overlay">
                  <h4 className="heading">iPad Website</h4>
                  <p className="about-project">
                    This is Website For Sell iPad In Middel East
                  </p>
                  <a
                    href="https://github.com/Mahmoud-Montaser/product-website"
                    target={"_blank"}
                  >
                    Github
                  </a>
                </div>
                <img src={Tablet} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card">
                <div className="overlay">
                  <h4 className="heading">Comming Soon Page</h4>
                  <p className="about-project">
                    This Page For Game Application Its Will Start Soon
                  </p>
                  <a
                    href="https://www.github.com/Mahmoud-Montaser/comming-soon-page"
                    target={"_blank"}
                  >
                    Github
                  </a>
                </div>
                <img src={CommingSoonPage} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card">
                <div className="overlay">
                  <h4 className="heading">Restaurant</h4>
                  <p className="about-project">
                    This Website Is Restaurant Website You Can Bay meal
                  </p>
                  <a
                    href="https://www.github.com/Mahmoud-Montaser/mobile-website"
                    target={"_blank"}
                  >
                    Github
                  </a>
                </div>
                <img src={Mobile} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card">
                <div className="overlay">
                  <h4 className="heading">DemoPortfolio</h4>
                  <p className="about-project">
                    This Is Demo Portfolio For Me This Was Traning
                  </p>
                  <a
                    href="https://www.github.com/Mahmoud-Montaser/portfolio-project"
                    target={"_blank"}
                  >
                    Github
                  </a>
                </div>
                <img src={DemoPortfolio} />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4" data-aos="fade-up">
              <div className="card">
                <div className="overlay">
                  <h4 className="heading">Company Website</h4>
                  <p className="about-project">This is Website For Company</p>
                  <a
                    href="https://www.github.com/Mahmoud-Montaser/company-website"
                    target={"_blank"}
                  >
                    Github
                  </a>
                </div>
                <img src={companyWebsite} />
              </div>
            </div>
            <div className="col-12">
              <div className="text-center">
                <a className="view-all-work" href="work.js">
                  See More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Work;
