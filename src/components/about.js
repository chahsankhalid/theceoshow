import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { BsPlay } from 'react-icons/bs';
import { GiTireIronCross } from 'react-icons/gi';
import Typewriter from "typewriter-effect/dist/core";

function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Body>
        <Modal.Header className="modalheadervideo">
          <Modal.Title id="contained-modal-title-vcenter">
            <Button className="closebtn" onClick={props.onHide}>
              <GiTireIronCross />
            </Button>
          </Modal.Title>
        </Modal.Header>
        <video
          autoPlay
          loop
          playsInline
          controls
          className="back-video"
          id="backVideo"
        >
          <source src={"./assets/videos/The Game Company For Website low rey.mp4"} type="video/mp4" />
        </video>
      </Modal.Body>
    </Modal>
  );
}

const About = () => {
  const [modalShow, setModalShow] = useState(false);
  useEffect(() => {
    new Typewriter("#typewriterRevolutionize", {
      strings: [
        "Revolutionize the Gaming Industry",
        "Revolutionize the Gaming Industry",
      ],
      autoStart: true,
      loop: true,
    });
  }, []);

  return (
    <>
      <section id="ABOUT-us">
        <div className="container">
          <h1 className="aboutheading">
            To <span className="purpletext" id="typewriterRevolutionize"></span>
          </h1>
          <h1 className="aboutheadingmob">
            To <span className="purpletext" id="">Revolutionize the Gaming Industry</span>
          </h1>
          <h1 className="aboutheading">
            by providing a Cloud based platform that is
          </h1>
          <h1 className="aboutheading">accessible, inclusive and innovative</h1>
          <p className="aboutpara">
            A platform that promises unmatched
            <br /> gaming experience to anyone, anywhere, anytime
            <br />
            and on any device.
          </p>
          <Button
            variant="outline-primary"
            className="projectbtn"
            onClick={() => setModalShow(true)}
          >
            <BsPlay /> See in Action
          </Button>
          <MyVerticallyCenteredModal
            show={modalShow}
            onHide={() => setModalShow(false)}
          />
        </div>
      </section>
    </>
  );
};

export default About;
