import React, { useState } from "react";

export const Aboutmore = () => {
  return (
    <>
      <section id="map">
        <div className="container">
          <div className="row">
            <div className="col-md-12 mapmain">
              <div className="divparent">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d115529.45173411771!2d55.206699871506906!3d25.193259849847607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x3e5f6829419a6291%3A0x45715f67a79e1479!2sSaaha%20Offices%20B%2C%2057VG%2B6MX%20-%20al%20Saaha%20Offices%20-%20B%20Souk%20Al%20Bahar%20-%20Dubai%20-%20United%20Arab%20Emirates!3m2!1d25.193120999999998!2d55.276740999999994!5e0!3m2!1sen!2s!4v1676739367599!5m2!1sen!2s"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
                <div className="maplocation">304, Al Saaha Offices, Block-B, Downtown, Dubai, UAE  <span className="locationtag"> Location</span></div>
              </div>
            </div>
            <div className="col-md-6"></div>
          </div>
        </div>
      </section>
    </>
  );
};
