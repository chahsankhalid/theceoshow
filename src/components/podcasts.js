import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Services = () => {
  useEffect(() => {
    gsap.to("#Podcast", {
      scrollTrigger: {
        trigger: ".glow-text",
        markers: false,
        start: "top top",
        // end: "+=1200",
        end: "bottom bottom",
        pin: ".glow-text",
        endTrigger: "#Podcast",
        scrub: 2,
      },
    });
  }, []);
  return (
    <>
      <h1 className="glow-text">PODCASTS</h1>
      <section id="Podcast">
        <div className="container-fluid">
          {/* <img
            src={"./assets/images/podcastmessage.png"}
            alt="revolve"
            className="podcast-message"
          /> */}
          <video autoPlay loop muted playsInline className="podcast-message">
            <source
              src={process.env.PUBLIC_URL + "/assets/videos/Message.mp4"}
              type="video/mp4"
            />
          </video>
          <div className="row">
            <div className="col-md-6 item-center">
              <div className="landing-content">
                <div className="landingcontent-parent">
                  <h1>
                    Podcast Episodes
                    <img
                      src={"./assets/images/underline.svg"} 
                      alt="revolve"
                      className="underline-svg"
                    />
                  </h1>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-md-6">
              <div className="podcast-leftparentbox">
                <div className="pod-imagesgrandparent">
                  <div className="pod-imagesparent">
                    <img
                      src={"./assets/images/Leading Through Adversity PIC.png"}
                      alt="revolve"
                      className="podcastimages"
                    />
                  </div>
                </div>
                <div className="podcast-detail">
                  <h2>Leading Through Adversity:</h2>
                  <h2>CEO Insights</h2>
                  <p>Problem Solving, Business Development, Startups</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="podcast-rightparentbox">
              <div className="pod-imagesgrandparent">
                <div className="pod-imagesparent">
                  <img
                    src={"./assets/images/ceo-success.png"}
                    alt="revolve"
                    className="podcastimages"
                  />
                </div>
                </div>
                <div className="podcast-detail">
                  <h2>Innovation and Growth:</h2>
                  <h2>CEO Success Stories</h2>
                  <p>Problem Solving, Business Development, Startups</p>
                </div>
              </div>
            </div>
          </div>
          <div className="row pt-60">
            <div className="col-md-6">
              <div className="podcast-leftparentbox">
              <div className="pod-imagesgrandparent">
                <div className="pod-imagesparent">
                  <img
                    src={"./assets/images/navigating PIC.png"}
                    alt="revolve"
                    className="podcastimages"
                  />
                </div>
                </div>
                <div className="podcast-detail">
                  <h2>Navigating Change:</h2>
                  <h2>Lessons from Top CEOs</h2>
                  <p>Business Ideas, Business Development, Business Lessons</p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="podcast-rightparentbox">
              <div className="pod-imagesgrandparent">
                <div className="pod-imagesparent">
                  <img
                    src={
                      "./assets/images/building Leading Through Adversity PIC.png"
                    }
                    alt="revolve"
                    className="podcastimages"
                  />
                </div>
                </div>
                <div className="podcast-detail">
                  <h2>Building High-Performing Teams:</h2>
                  <h2>CEO Perspectives</h2>
                  <p>Performance, Team Management, Management, Team Work</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
