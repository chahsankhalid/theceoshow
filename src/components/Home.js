import React, { useEffect } from "react";
import Landing from "./landingMain";
import Navcomponent from './navbar';
import { IoIosArrowUp } from 'react-icons/io';
import Footer from "./footer";
import About from './ourHost';
import Services from "./podcasts";
import gsap from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import AboutUS, { Aboutmore } from "./aboutmore";
import Marquee from './marquee';
import Sliderscroll from './sliderScroll';
gsap.registerPlugin(ScrollSmoother)

const Home = () => {
    useEffect(() => {
        ScrollSmoother.create({
            wrapper: "#smooth-wrapper",
            content: "#smooth-content",
            smooth: 2,
            smoothTouch: 0.1,
            effects: true,
        });
        // smoother.effects('.parentIneerParalax', {speed: "auto"})
        // var backtoTop = document.getElementById("back-to-top");
        // window.addEventListener("scroll", function () {
        //     if (window.scrollY > 200) {
        //         backtoTop.classList.add('active')
        //     }
        //     else {
        //         backtoTop.classList.remove('active')
        //     }
        //     // backtoTop.style.transform = "rotate(" + window.pageYOffset + "deg)";
        // })
    }, [])

    return (
        <>
            {/* <a id="back-to-top" href="#" className="back-to-top" role="button"><IoIosArrowUp className="upicon"/></a> */}
            <div className="smooth-wrapper" id="smooth-wrapper">
                <div id="smooth-content">
                    <Navcomponent />
                    <Landing />
                    <About />
                    <AboutUS />
                    <Services />
                    <Marquee />
                    {/* <Aboutmore /> */}
                    {/* <Sliderscroll /> */}
                    {/* <AllProjects />
                    <Ourteam />
                    <Blogs /> */}
                    <Footer />     
                </div>
            </div>
        </>
    )
}

export default Home