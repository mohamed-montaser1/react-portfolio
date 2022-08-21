import React from "react";
import "../App.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import InputGroup from "react-bootstrap/InputGroup";
import AOS from "aos";
import "aos/dist/aos.css";
// ..
AOS.init();

function Contact() {
  return (
    <>
      <section className="contact" id="contact">
        <h2 className="special-heading" data-aos="fade-right">
          Contact Me
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-12" data-aos="fade-in" data-delay="1000">
              <Form>
                <Form.Group
                  className="mb-3 name-inputs"
                  controlId="formBasicEmail"
                >
                  <Form.Control type="text" placeholder="First Name" />
                  <Form.Control type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>
                <InputGroup>
                  <Form.Control
                    as="textarea"
                    className="text-area"
                    aria-label="With textarea"
                    placeholder="Send Your Massage Here"
                  />
                </InputGroup>
                <Button variant="primary" type="submit">
                  Submit
                </Button>
              </Form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
