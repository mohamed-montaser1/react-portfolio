import React, { useState } from "react";
import logo from "../imgs/my-main-logo.png";
import landing from "../imgs/landing.png";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min";
window.onload = function () {
  let text = document.querySelector(".main-text");
  let content = text.textContent;
  let splitText = content.split("");
  text.textContent = "";
  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;
  let timer = setInterval(onTick, 50);

  function onTick() {
    let span = document.querySelectorAll("span")[char];
    span.classList.add("custom-fade");
    char++;
    if (char === splitText.length) {
      complate();
      return;
    }
  }

  function complate() {
    clearInterval(timer);
    timer = null;
  }

  setTimeout(() => (text.textContent += ""), 3100);

  if (window.screen.width < 992 || window.innerWidth < 992) {
    let ul = document.querySelector(".navbar ul");
    let el = document.createElement("i");
    el.classList.add("fa-solid", "fa-circle-xmark", "exit");
    el.onclick = function () {
      let navbarToggler = document.querySelector(".navbar-toggler");
      navbarToggler.click();
    };
    ul.prepend(el);
  }
};

function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link" href="">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/About">
                  About
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#work">
                  Work
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#contact">
                  Contact
                </a>
              </li>

              <li className="nav-item">
                <a className="nav-link" href="#hiring">
                  Hiring
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="landing">
        {/* <img className="bg-img" src={imgBg} /> */}
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6">
              <h1 className="main-text">
                Hello Iam Mohamed Montaser <br />
                <small>Iam Front-end developer</small>
              </h1>
              <div className="buttons-container">
                <button
                  className="btn btn-work"
                  onClick={() => (window.location.href = "#work")}
                >
                  Work
                </button>
                <button className="btn btn-contact">Contact</button>
              </div>
            </div>
            <div
              className="col-sm-12 col-md-6"
              data-aos="fade-in"
              data-aos-duration="2000"
            >
              <img className="landing-img" src={landing} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Header;
