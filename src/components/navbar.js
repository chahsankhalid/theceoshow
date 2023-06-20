import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";

const Navcomponent = () => {
  const hidenav = () => {
    $("body").removeClass("active");
    document.body.style.overflow = "visible";
    $(".navbar-collapse").removeClass("show");
    $(".toggletwoicon,.iconone,.icontwo,.togglefouricon").removeClass("active");
    $(".navbar-toggler").removeClass("collapsed");
  };

  useEffect(() => {
    // $(".navbar-toggler").on("click", function () {
    //   $("body").toggleClass("active");
    //   $('.navbar-toggler').toggleClass('collapsed')
    //   $(".iconone").toggleClass("active");
    //   $(".icontwo").toggleClass("active");
    //   $(".toggletwoicon").toggleClass("active");
    //   $(".togglefouricon").toggleClass("active");
    // });
  }, []);
  return (
    <>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand to="/">
            <img
              src={"./assets/images/logo.png"}
              className="logomain"
              alt="logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="navbarScroll"
            className="navbar-toggler active"
          >
            <div class="toggletwoicon">
              <span class="navbar-toggler-icon iconone"></span>
              <span class="navbar-toggler-icon icontwo"></span>
            </div>
            <div class="togglefouricon">
              <span class="navbar-toggler-icon iconthree"></span>
              <span class="navbar-toggler-icon iconfour"></span>
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id="navbarScroll">
            <Nav className="">
              <Navbar.Brand to="/" className="moblogbrand">
                <img
                  src={"./assets/images/logo.png"}
                  className="moblogo"
                  alt="logo"
                />
              </Navbar.Brand>
              <ul className="navul">
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#ABOUT-US"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#About"
                  >
                    Digital Marketing
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#Podcast"
                  >
                    Podcasts
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link contact-usbtn"
                    smooth={true}
                    to="#map"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
              {/* <Button
                variant="outline-primary"
                onClick={() => setLgShow(true)}
                className="getin"
              >
                Speak to us
              </Button>
              <img
                src={"./assets/images/Mark.png"}
                className="mobnavlogo"
                alt="logo"
              /> */}
            </Nav>
            {/* <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={sendEmail} className="emailform">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputFname"
                      placeholder="Full name"
                      name="fname"
                      value={formState.fname || ""}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputLorganization"
                      placeholder="Organization"
                      name="organization"
                      value={formState.organization || ""}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email"
                      name="email"
                      value={formState.email || ""}
                      onChange={changeHandler}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputLsubject"
                      placeholder="Subject"
                      name="subject"
                      value={formState.subject || ""}
                      onChange={changeHandler}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="phone"
                      className="form-control"
                      id="exampleInputPhone"
                      aria-describedby=""
                      placeholder="Phone Number"
                      name="phone"
                      value={formState.phone || ""}
                      onChange={changeHandler}
                    />
                  </div>
                  <div class="form-group">
                    <textarea
                      class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      placeholder="Message"
                      name="message"
                      value={formState.message || ""}
                      onChange={changeHandler}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="submitbtnemail" >
                    <BsArrowRight />
                  </button>
                </form>
              </Modal.Body>
            </Modal> */}
            <div className="mobilenav-img">
              <video autoPlay loop muted playsInline className="mic-mob">
                <source
                  src={process.env.PUBLIC_URL + "/assets/videos/Mic.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
};

export default Navcomponent;
