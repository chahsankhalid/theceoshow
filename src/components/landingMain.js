import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { AiOutlineArrowUp } from "react-icons/ai";

const Landing = () => {
  return (
    <>
      <section id="landingsection">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div className="landing-content">
                <div className="landingcontent-parent">
                  <h1>
                    Insights from Top CEOs{" "}
                    <img
                      src={"./assets/images/underline.svg"}
                      alt="revolve"
                      className="underline-svg"
                    />
                  </h1>

                  <p>
                    Discover firsthand knowledge and expertise from
                    industry-leading CEOs. Gain invaluable insights and learn
                    from their experiences. Unlock the secrets of success with
                    'The CEO Show'
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 item-end">
              <div className="revolvingcircle">
                <Link to="#Podcast">
                  <img
                    src={"./assets/images/episoderevolve.png"}
                    alt="revolve"
                  />
                </Link>
                <AiOutlineArrowUp className="revolveicon" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Landing;
