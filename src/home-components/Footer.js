import React from "react";
import "../App.css";
import Logo from "../imgs/my-main-logo.png";
import ListGroup from "react-bootstrap/ListGroup";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-md-6 col-lg-4">
              <img className="logo" src={Logo} />
            </div>
            <div className="col-sm-12 col-md-6 col-lg-4">
              <div className="col-12 list-bottom">
                <ListGroup horizontal>
                  <ListGroup.Item>
                    <a
                      className="contrast"
                      href="https://www.facebook.com/profile.php?id=100075235905830"
                    >
                      <i class="fa-brands fa-square-facebook"></i>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a
                      className="contrast"
                      href="https://www.twitter.com/Mastro_Coding"
                    >
                      <i class="fa-brands fa-square-twitter"></i>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="https://www.youtube.com/channel/UCFs4x3B29OjSugCfAbCnwiw">
                      <i class="fa-brands fa-youtube"></i>
                    </a>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <a href="https://www.linkedin.com/in/mohamed-montaser-8a00a1230/">
                      <i class="fa-brands fa-linkedin"></i>
                    </a>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
            <div className="col-sm-12 col-lg-4">
              <p>Created By Mohamed Montaser - ©{new Date().getFullYear()}</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
