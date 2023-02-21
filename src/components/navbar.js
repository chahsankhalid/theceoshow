import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { BsArrowRight } from "react-icons/bs";
import Modal from "react-bootstrap/Modal";
import { ToastContainer, toast } from "react-toastify";
import { HashLink as Link } from "react-router-hash-link";
import $ from "jquery";

const Navcomponent = () => {
  const [lgShow, setLgShow] = useState(false);
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    const config = {
      SecureToken: "365f23bb-b519-4870-9621-17e3a0f0f1e3",
      To: "ahsanch1509@gmail.com",
      From: formState.email,
      Subject: "Email from website",
      // Body : `${(formState.fname).concat(' ', formState.lname)} connected to you over email`,
      Body: {
        Name: `${formState.fname}<br/>`,
        Organization: `${formState.organization}<br/>`,
        Email: `${formState.email}<br/>`,
        Subject: `${formState.subject}<br/>`,
        Phone: `${formState.phone}<br/>`,
        Message: `${formState.message}<br/>`,
        // Service: `${formState.select1}<br/>`,
        // Budget: `${formState.select2}<br/>`,
        Client: `${formState.fname.concat(
          " ",
          formState.lname
        )} connected to you from website`,
      },
    };
    if (window.Email) {
      window.Email.send(config).then((response) => {
        if (response !== "OK") {
          toast.error("Incorrect Email", {
            position: "top-right",
            autoClose: 4000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });
        } else {
          toast.success("🦄Email sent successfully", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          // setTimeout(
          //     navigate('/')
          // , 3000);
        }
      });
    }
  };
  const hidenav = () => {
    document.body.style.overflow = "visible";
    $(".navbar-collapse").removeClass("show");
    $(".toggletwoicon,.iconone,.icontwo,.togglefouricon").removeClass("active");
  };

  useEffect(() => {
    $(".navbar-toggler").on("click", function () {
      $("body").toggleClass("active");
      $(".iconone").toggleClass("active");
      $(".icontwo").toggleClass("active");
      $(".toggletwoicon").toggleClass("active");
      $(".togglefouricon").toggleClass("active");
    });
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
                {/* <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#cardsrow"
                  >
                    NEWS
                  </Link>
                </li> */}
                {/* <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#Service"
                  >
                    CAREER
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#clients"
                  >
                    PARTNERS
                  </Link>
                </li> */}
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="/"
                  >
                    HOME
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#ABOUT-us"
                  >
                    ABOUT
                  </Link>
                </li>
                <li>
                  <Link
                    onClick={hidenav}
                    className="nav-link"
                    smooth={true}
                    to="#map"
                  >
                    Contact us
                  </Link>
                </li>
              </ul>
              <Button
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
              />
            </Nav>
            <Modal
              size="lg"
              show={lgShow}
              onHide={() => setLgShow(false)}
              aria-labelledby="example-modal-sizes-title-lg"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg"></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <form onSubmit={submitHandler} className="emailform">
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

                  <button type="submit" className="submitbtnemail">
                    <BsArrowRight />
                  </button>
                </form>
              </Modal.Body>
            </Modal>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <ToastContainer />
    </>
  );
};

export default Navcomponent;
