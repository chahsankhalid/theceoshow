import './index.css';
import './mediaQueries.css';
import React, { useEffect,useState } from 'react';
import { Route, Routes,useLocation } from 'react-router-dom';
import Home from './components/Home';
import MouseFollower from "mouse-follower";
import gsap from "gsap";
import { AnimatePresence } from 'framer-motion';
import jQuery from 'jquery';
MouseFollower.registerGSAP(gsap);

function App() {
  const [loading, setLoading] = useState(true)
  const location  = useLocation();
  const spinner = document.getElementById('pre-loader');
  
  const cursor = new MouseFollower();
  useEffect(() => {
    const elements2 = document.querySelectorAll(".podcastimages");
    elements2.forEach((element) => {
      element.addEventListener("mouseenter", () => {
        cursor.setImg('./assets/images/mouse.png')
      });
      element.addEventListener("mouseleave", () => {
        cursor.removeImg();
      });
    });
  },[])
  if (spinner) {
    jQuery(document).ready(function() {
      setTimeout(() => {
        jQuery(spinner).slideUp(1000);
       }, 4000)
      setLoading(true)
  }); 
}


  // var cursor = document.querySelector('.cursor');

  return (
   
      <div className="App">
    <AnimatePresence exitBeforeEnter >
        {/* <Routes> */}
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          {/* </AnimatePresence> */}
        </Routes>
    </AnimatePresence>
      </div>

  );
}
export default App;
