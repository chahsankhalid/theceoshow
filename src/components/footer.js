import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Navbar } from "react-bootstrap";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiOutlineTwitter,
} from "react-icons/ai";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaDiscord,
  FaTwitch,
  FaTelegram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <section id="footer" className="">
        <div className="container-fluid footercontent">
          {/* <h1 className='talk'>Let's Talk.</h1> */}
          <div className="row">
            <div className="col-md-2">
              <Navbar.Brand href="/">
                <img
                  src={"./assets/images/footerlogo.png"}
                  className="logofooter"
                />
              </Navbar.Brand>
            </div>
            <div className="col-md-3 offset-md-1">
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
            <div className="col-md-3">
              <div className="gridview gridview1">
                <h4>Company</h4>
                <div className="footerlinks mar20">
                  <Link className="nav-link" to="/privacy&policy#legalnotice">
                    Legal Notice
                  </Link>

                  <Link className="nav-link" to="/privacy&policy">
                    Privacy Policy
                  </Link>
                  <Link
                    className="nav-link"
                    to="/privacy&policy#TermsandConditions"
                  >
                    Terms & Conditions
                  </Link>
                  <Link className="nav-link" to="/privacy&policy#copyright">
                    Copyright
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="gridview gridview1">
                <h4>Social Media</h4>
                <div className="footerlinks mar20">
                  <ul className="rounded">
                    <li>
                      <a href="https://www.youtube.com/channel/UCFAVyTbSyLGUzqw8VH6wXog" target="_blank" className="socialicon youtube">
                        <AiFillYoutube />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/thegamecompany.ai/" target="_blank" className="socialicon instagram">
                        <AiFillInstagram />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.facebook.com/gaming/Thegamecompanyai" target="_blank" className="socialicon facebook">
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/thegamecompany-ai/?viewAsMember=true" target="_blank" className="socialicon linkedin">
                        <FaLinkedinIn />
                      </a>
                    </li>
                  </ul>
                  <ul className="rounded socialiconbottom">
                    <li>
                      <a href="https://twitter.com/TheGame_Company?t=sNopErV7Gnc3_ONLQn4ufA&s=09" target="_blank" className="socialicon twitter">
                        <AiOutlineTwitter />
                      </a>
                    </li>
                    {/* <li>
                      <a href="" target="_blank" className="socialicon discord">
                        <FaDiscord />
                      </a>
                    </li> */}
                    <li>
                      <a href="https://www.twitch.tv/thegamecompanyai" target="_blank" className="socialicon twitch">
                        <FaTwitch />
                      </a>
                    </li>
                    {/* <li>
                      <a href="" className="socialicon telegram">
                        <FaTelegram />
                      </a>
                    </li> */}
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
            <div className="copywright">The Game Co L.L.C © 2023</div>
          </div>
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <p className="copywright2">
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
