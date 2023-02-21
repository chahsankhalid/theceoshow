import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

const Sliderscroll = () => {
  return (
    <>
      <section id="clients">
        <div className="container-fluid">
          <OwlCarousel
            className="owl-theme"
            loop={true}
            margin={10}
            autoplay={true}
            autoplayHoverPause={true}
            autoplaySpeed={5000}
            nav={true}
            items={7}
          >
            <div className="item">
              <img
                src={"./assets/images/Hp.png"}
                className="clients"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src={"./assets/images/The-Engine.png"}
                className="clients"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src={"./assets/images/Shell.png"}
                className="clients"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src={"./assets/images/AA.png"}
                className="clients"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src={"./assets/images/Apple.png"}
                className="clients"
                alt="client"
              />
            </div>
            <div className="item">
              <img
                src={"./assets/images/Nvidia.png"}
                className="clients"
                alt="client"
              />
            </div>
          </OwlCarousel>
          ;
        </div>
      </section>
    </>
  );
};

export default Sliderscroll;
