import React from "react";
import WebLayout from "./component/WebLayout";
import Footer from "./component/Footer";
import logo from "./images/logo.png";

import TabsFor from "./component/TabsFor";

const Home = () => {
  return (
    <>
      <section className="position-relative title pt-0">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <div className="text-center  logo">
                <img
                  alt="Red Cow Ice Cream Logo"
                  className="mx-auto  "
                  src={logo}
                  data-aos-once="true"
                  data-aos-duration="600"
                  data-aos="fade-in"
                />
                <h1 className=" title_heading">
                  Discover scoops of happiness near you
                </h1>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="position-relative tabs pt-0">
        <div className="container">
          <div className="web-container">
            <div className="row">
              <TabsFor />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Home;
