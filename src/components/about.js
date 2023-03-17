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
      className="modelmainparent"
    >
      <Modal.Body className="actionvideoparent">
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
          className="back-videoaction"
          id="backVideo"
          onContextMenu={e => e.preventDefault()}
        >
          <source src={"./assets/videos/The Game Company Final.mp4"} type="video/mp4" />
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
          <h1 className="aboutheading revolutiontext">
            To <span className="purpletext" id="typewriterRevolutionize"></span>
          </h1>
          <h1 className="aboutheadingmob revolutiontextmob">
          The<span className="purpletext" id="">ultimate gaming platform</span>
          </h1>
          <h1 className="aboutheading">
          that ensures inclusion and affordability, promising ultimate gaming experience
          </h1>
          <h1 className="aboutheading"> and user engagement, all by combining</h1>
          <h1 className="aboutheading">technology and innovation.</h1>
          {/* <p className="aboutpara">
            A platform that promises unmatched
            <br /> gaming experience to anyone, anywhere, anytime
            <br />
            and on any device.
          </p> */}
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
