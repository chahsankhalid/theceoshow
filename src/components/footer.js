import React,{useState} from "react";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";
import axios from "axios";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "react-bootstrap";
import { AiOutlineInstagram,AiFillYoutube,AiOutlineTwitter} from "react-icons/ai";
import { SiApplepodcasts, SiGooglepodcasts } from "react-icons/si";
import { BsSpotify } from "react-icons/bs";
import { FaTiktok, FaFacebookF } from "react-icons/fa";

const Footer = () => {
  const [formState, setFormState] = useState({});
  const changeHandler = (event) => {
    setFormState({ ...formState, [event.target.name]: event.target.value });
  };

  const sendEmail = (event) => {
    event.preventDefault();
    const data = {
      Name: formState.fname,
      Email: formState.email,
    };

    emailjs
      .sendForm(
        "service_36d2l6r",
        "template_u8ggfys",
        event.target,
        "8fI-sqXJweUI1s17Y"
      )
      .then((response) => {
        console.log(response.status);
        if (response.status === 200) {
          toast.success("Email sent successfully", {        
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          });

          axios
            .post(
              "https://sheet.best/api/sheets/659586f7-fc9d-4be5-9c85-876d03ce86e4",
              data
            )
            .then((response) => {
              console.log(response);
              setFormState("");
            });
        } else {
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

          // setTimeout(
          //     navigate('/')
          // , 3000);
        }
      });
  };
  return (
    <>
      <section id="footer" className="footer">
        <div className="container-fluid footer-container">
          <div className="row">
            <div className="col-md-5">
              <div className="social-media">
                <div className="social-mediaicons">
                  <a href="">
                    <SiApplepodcasts />
                  </a>
                  <a href="">
                    <BsSpotify />
                  </a>
                  <a href="">
                    <SiGooglepodcasts />
                  </a>
                  <a href="">
                    <FaFacebookF />
                  </a>
                </div>
                <div className="social-mediaicons mt-3">
                  <a href="">
                    <AiOutlineInstagram />
                  </a>
                  <a href="">
                    <AiFillYoutube />
                  </a>
                  <a href="">
                    <AiOutlineTwitter />
                  </a>
                  <a href="">
                    <FaTiktok />
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4 mt-50">
              <p>Advertise with us</p>
              <h4>advertise@theceoshow.co.uk</h4>
            </div>
            <div className="col-md-3 mt-50">
              <p>Visit us</p>
              <h4 className="clickme">Click Me!</h4>
            </div>
    
          </div>
          <div className="row mt-100 row-desktop">
            <div className="col-md-5">
              <div className="footer-logo">
              <img
                      src={"./assets/images/footerlogo.png"}
                      alt="logo"
                      className="footerlogo"
                    />
              </div>
            </div>
            <div className="col-md-4 privacy">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Service</a>
            </div>
            <div className="col-md-3">
              <h4>Get Podcast Updates!</h4>
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
                    <button type="submit" className="submitbtnemail">
                      Submit
                    </button>
                  </form>
            </div>
    
          </div>
          <div className="row mt-100 row-mobile">
          <div className="col-md-3">
          <h4>Get Podcast Updates!</h4>
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
                    <button type="submit" className="submitbtnemail">
                      Submit
                    </button>
                  </form>
            </div>
            <div className="col-md-5">
              <div className="footer-logo">
              <img
                      src={"./assets/images/footerlogo.png"}
                      alt="logo"
                      className="footerlogo footerlogo-mob"
                    />
              </div>
            </div>
            <div className="col-md-4 privacy">
              <a href="">Privacy Policy</a>
              <a href="">Terms & Service</a>
            </div>
          
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
