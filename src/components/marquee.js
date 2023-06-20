import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Marquee = () => {
  useEffect(() => {
    // gsap.to('.commnity', {
    //   xPercent: -20,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: ".commnity",
    //     start: "top center",
    //     end: "bottom top",
    //     scrub: true,
    //   }
    // });
    // let tl = gsap.timeline({
    //   scrollTrigger: {
    //     trigger: ".marquee",
    //     markers: false,
    //     start: "top top",
    //     pin: "false",
    //     scrub: 2,
    //   },
    // });
    // tl.add("start");
    // tl.from(
    //   ".marquee",
    //   {
    //     xPercent: 0,
    //     yPercent: 0,
    //   },
    //   "start"
    // );
    // tl.to(
    //   ".marquee",
    //   {
    //     xPercent: 30,
    //     yPercent: 0,
    //     ease: "none",
    //     duration: 4,
    //     // autoAlpha: 0
    //   },
    //   "start"
    // );
  }, []);
  return (
    <>
      <section id="Marquee">
        <div className="el">chevrolet</div>
        <div className="marquee-w">
          <div className="marquee">
            <span>
              THE CEO<div className="commnity"> SHOW - </div> THE CEO
              <div className="commnity"> SHOW - </div>
            </span>
          </div>
          <div className="marquee marquee2">
            <span>
              THE CEO<div className="commnity"> SHOW - </div> THE CEO
              <div className="commnity"> SHOW - </div>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Marquee;
