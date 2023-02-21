import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "react-bootstrap";
import { AiFillYoutube,AiFillInstagram,AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn,FaFacebookF,FaDiscord,FaTwitch,FaTelegram } from 'react-icons/fa';

const Footer = () => {
  return (
    <>
      <section id="footer" className="">
        <div className="container-fluid footercontent">
          {/* <h1 className='talk'>Let's Talk.</h1> */}
          <div className="row">
            <div className="col-md-5">
              <Navbar.Brand href="/">
                <img
                  src={"./assets/images/footerlogo.png"}
                  className="logofooter"
                />
              </Navbar.Brand>
            </div>
            <div className="col-md-2 offset-md-1">
              <div className="gridview gridview1">
                <h4>About Us</h4>
                <div className="footerlinks mar20">
                  <a href="" className="nav-link">
                    Careers
                  </a>
                  <a href="" className="nav-link">
                    News
                  </a>
                  <a href="" className="nav-link">
                    Press
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="gridview gridview1">
                <h4>Company</h4>
                <div className="footerlinks mar20">
                  <a href="" className="nav-link">
                    Legal Notice
                  </a>
                  <Link className="nav-link" to="/privacy&policy">
                    Privacy Policy
                  </Link>
                  {/* <a href="" className="nav-link">
                    Privacy Policy
                  </a> */}
                  <a href="" className="nav-link">
                    Terms & Conditions
                  </a>
                  <a href="" className="nav-link">
                    Copywright
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-2">
              <div className="gridview gridview1">
                <h4>Support</h4>
                <div className="footerlinks mar20">
                  <ul className="rounded">
                    <li>
                      <a href="" className="socialicon youtube">
                        <AiFillYoutube />
                      </a>
                    </li>
                    <li>
                      <a
                        href="" className="socialicon instagram"
                      >
                       <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="" className="socialicon facebook">
                      <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="" className="socialicon linkedin">
                       <FaLinkedinIn />
                      </a>
                    </li>
                  
                  </ul>
                  <ul className="rounded">
                    <li>
                      <a href="" className="socialicon linkedin">
                       <AiOutlineTwitter />
                      </a>
                    </li>
                    <li>
                      <a href="" className="socialicon linkedin">
                       <FaDiscord />
                      </a>
                    </li>
                    <li>
                      <a href="" className="socialicon linkedin">
                       <FaTwitch />
                      </a>
                    </li>
                    <li>
                      <a href="" className="socialicon linkedin">
                       <FaTelegram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="copywrightfooter">
        <div className="row bottomnav">
          <div className="col-md-4">
            <div className="copywright">The Game Company L.L.C © 2023</div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p className="copywright2">
              info@thegamecompany.ai
              <br/><br/>
              To Revolutionizing the gaming industry by providing a Cloud based
              platform that is accessible, inclusive and innovative
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
