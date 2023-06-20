import React from "react";

const AboutUS = () => {
  return (
    <>
      <section id="ABOUT-US">
        {/* <img
          src={"./assets/images/mic.png"}
          alt="revolve"
          className="mic"
        /> */}
        <video autoPlay loop muted playsInline className="mic">
          <source src={process.env.PUBLIC_URL + "/assets/videos/Mic.mp4"} type="video/mp4"/>
        </video>
        <div className="container-fluid">
          <div className="row">
          <div className="col-md-6">
              <img
                src={"./assets/images/CEOs Pic.png"}
                alt="revolve"
                className="saima-img aboutusimg about-img"
              />
            </div>
            <div className="col-md-6 item-center">
              <div className="landing-content">
                <div className="landingcontent-parent">
                  <h1>
                   About Us
                    <img
                      src={"./assets/images/underline.svg"}
                      alt="revolve"
                      className="underline-svg"
                    />
                  </h1>

                  <p>
                  At 'The CEO Show,' we're dedicated to <span className="neon">helping CEOs amplify their reach and make a lasting impact.</span> Through our diverse platforms, including our engaging website and top social media channels like YouTube, Facebook, Twitter, and LinkedIn, we equip CEOs with advanced digital marketing strategies to expand their influence and maximize their potential.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUS;
