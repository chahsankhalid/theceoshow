import React from "react";
import Button from "react-bootstrap/Button";

const Services = () => {
  return (
    <>
      <section id="About">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <Button variant="outline-primary" className="aboutbtn">
                ABOUT US
              </Button>
              <h1 className="aboutheading pt-3">Revolutionary </h1>
              <h1 className="aboutheading">Experience Driven</h1>
              <h1 className="aboutheading">
              through our <span className="purpletext">AI driven</span>
              </h1>
              <h1 className="aboutheading">cloud based platform</h1>
              <p className="aboutcontent">
                We provide the ultimate gaming experience driven by users’
                psychographics and IOA (Interests, Opinions, and Activities)
                through our powerful fantasy league engine. Our cloud-based Web
                3.0 platform is driven by AI and covers the global spectrum of
                devices, games, and gamers ensuring gaming is accessible, engaging and rewarding to everyone.
                <br />
                <br />
                The revolutionary user experience based on our indigenous
                technology is breaking down the barriers of connectivity,
                latency, and market economics!
              </p>
            </div>
            <div className="col-md-5" onContextMenu={e => e.preventDefault()}>
              <video
                autoPlay
                loop
                playsInline
                muted
                className="back-video"
                id="backVideo"
              >
                <source
                  src={"./assets/videos/Comp 7_Trimdynamic.mp4"}
                  type="video/mp4"
                />
              </video>
            </div>
          </div>
        </div>
      </section>
      <section id="Mission">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              {/* <Button variant="outline-primary" className="aboutbtn">
                OUR MISSION
              </Button> */}
              <h1 className="aboutheading pt-3 ourmission textfifty">Our</h1>
              <h1 className="aboutheading textfifty">Mission</h1>
              {/* <h1 className="aboutheading">
                by <span className="purpletext">AI Engine</span>
              </h1> */}
              <p className="aboutcontent">
                To offer the most advanced, flexible and inclusive AI driven
                cloud gaming platform that promises unmatched gaming experience,
                combining accessibility, affordability, innovation to anyone,
                anywhere, anytime and on any device
              </p>
            </div>
            <div className="col-md-6">
            <img
                  src={"./assets/images/controller.png"}
                  className="controller"
                  alt="controller"
                />
            </div>
          </div>
        </div>
      </section>
      <section id="Services">
        <div className="container-fluid">
          <div className="row cardsrow" id="cardsrow">
            <div className="col-md-4">
              <div className="service-cards">
                {/* <ul>
                  <li>01/03</li>
                </ul> */}
                {/* <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source
                  src={"./assets/videos/core-development.mp4"}
                  type="video/mp4"
                />
              </video> */}
                <img
                  src={"./assets/images/003.png"}
                  className="rotating"
                  alt="revolve"
                />
                <model-viewer
                  alt="cloud computing"
                  ar
                  environment-image={"./assets/3d/"}
                  poster="shared-assets/models/NeilArmstrong.webp"
                  shadow-intensity="1"
                  camera-controls
                  touch-action="pan-y"
                ></model-viewer>
                <h1>Cloud Computing</h1>
                <p>
                  Offering an end to end experience, for the entire gaming
                  community from across the globe regardless of the end user
                  device, connectivity landscape and economic background.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-cards">
                {/* <ul>
                  <li>02/03</li>
                </ul> */}
                {/* <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source src={"./assets/videos/adoption.mp4"} type="video/mp4" />
              </video> */}
                <img
                  src={"./assets/images/002.png"}
                  className="rotating"
                  alt="revolve"
                />

                <h1>Web3</h1>
                <p>
                  Leveraging web3 technology to create a vast interconnected
                  multi-role ecosystem that allows a multitude of gamers to
                  participate, play and earn.
                </p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="service-cards">
                {/* <ul>
                  <li>03/03</li>
                </ul> */}
                {/* <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source src={"./assets/videos/Comp 5.mp4"} type="video/mp4" />
              </video> */}
                <img
                  src={"./assets/images/001.png"}
                  className="rotating"
                  alt="revolve"
                />

                <h1>Metaverse</h1>
                <p>
                  Using blockchain technology to bring Metaverse gaming
                  experiences to life, enable gamification, digital twins and
                  management of digital assets (identities, personas, NFTs and
                  digital tokens){" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
