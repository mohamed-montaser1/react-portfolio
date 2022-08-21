import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
import About from "../home-components/About";
import Header from "../home-components/Header";
import Work from "../home-components/Work";
import Services from "../home-components/Services";
import Contact from "../home-components/Contact";
import Hiring from "../home-components/Hiring";
import Footer from "../home-components/Footer";
import Pricing from "../home-components/Pricing";

function Home() {
  return (
    <>
      <Header />
      <About />
      <Services />
      <Work />
      {/* <Pricing /> */}
      <Contact />
      <Hiring />
      <Footer />
    </>
  );
}

export default Home;
