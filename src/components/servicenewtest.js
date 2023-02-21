import React from "react";
import Button from "react-bootstrap/Button";

const Services = () => {
  return (
    <>
      <section id="Service">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-7">
              <Button variant="outline-primary" className="aboutbtn">
                ABOUT US
              </Button>
              <h1 className="aboutheading pt-3">Revolutionary </h1>
              <h1 className="aboutheading">Experience Driven </h1>
              <h1 className="aboutheading">
                by <span className="purpletext">AI Engine</span>
              </h1>
              <p className="aboutcontent">
              We provide the ultimate gaming experience driven by users’ psychographics and IOA (Interests, Opinions, and Activities) through our powerful fantasy league engine. Our cloud-based Web 3.0 platform is driven by AI and covers the global spectrum of devices, games, and gamers.
              <br/><br/>
              The revolutionary user experience based on our indigenous technology is breaking down the barriers of connectivity, latency, and market economics!
              </p>
            </div>
            <div className="col-md-5">
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
        <div className="row cardsrow" id="cardsrow">
          <div className="col-md-4">
            <div className="service-cards">
              <ul>
                <li>01/03</li>
              </ul>
              <video
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
              </video>
              {/* <img
                  src={"./assets/images/testicon.png"}
                  className="rotateicon"
                /> */}
              <h1>Cloud Computing</h1>
              <p>Offering an end to end experience, for the entire gaming community from across the globe regardless of the end user device, connectivity landscape and economic background.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-cards">
              <ul>
                <li>02/03</li>
              </ul>
              <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source
                  src={"./assets/videos/adoption.mp4"}
                  type="video/mp4"
                />
              </video>

              <h1>Web3</h1>
              <p>Leveraging web3 technology to create a vast interconnected multi-role ecosystem that allows a multitude of gamers to participate, play and earn.</p>
            </div>
          </div>
          <div className="col-md-4">
            <div className="service-cards">
              <ul>
                <li>03/03</li>
              </ul>
              <video
                autoPlay
                loop
                playsInline
                muted
                className="card-video"
                id="backVideo"
              >
                <source
                  src={"./assets/videos/Comp 5.mp4"}
                  type="video/mp4"
                />
              </video>

              <h1>Metaverse</h1>
              <p>Using blockchain technology to bring Metaverse gaming experiences to life, enable gamification, digital twins and management of digital assets (identities, personas, NFTs and Digital tokens) </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
