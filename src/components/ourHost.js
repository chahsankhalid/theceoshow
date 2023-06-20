import React from "react";

const About = () => {
  return (
    <>
      <section id="ABOUT">
        {/* <img
          src={"./assets/images/Audio Wave Final.gif"}
          alt="revolve"
          className="waves"
        /> */}
        <video autoPlay loop muted playsInline className="back-video waves">
          <source src={process.env.PUBLIC_URL + "/assets/videos/music.mp4"} type="video/mp4"/>
        </video>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6 item-center">
              <div className="landing-content">
                <div className="landingcontent-parent">
                  <h1>
                    Our Host{" "}
                    <img
                      src={"./assets/images/underline.svg"}
                      alt="revolve"
                      className="underline-svg"
                    />
                  </h1>

                  <p>
                    Meet our exceptional host,{" "}
                    <span className="neon">Saima Ajram</span>, a celebrated
                    broadcaster and corporate show host with an impressive
                    15-year tenure at BBC.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 item-end">
              <img
                src={"./assets/images/Saima Arjam PIC.png"}
                alt="revolve"
                className="saima-img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
