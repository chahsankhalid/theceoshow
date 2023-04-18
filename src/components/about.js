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
          <source src={"./assets/videos/The Game Company Video 2.mp4"} type="video/mp4" />
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
        "Ultimate Gaming Platform",
        "Ultimate Gaming Platform",
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
            The <span className="purpletext" id="typewriterRevolutionize"></span>
          </h1>
          <h1 className="aboutheadingmob revolutiontextmob">
          The<span className="purpletext" id="">ultimate gaming platform</span>
          </h1>
          <h1 className=" aboutheading2">
          that ensures inclusion and affordability, promising unmatched gaming experience and user engagement,
          </h1>
          <h1 className=" aboutheading2"> by combining technology and innovation.</h1>
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
