import React from "react";
import WebLayout from "./component/WebLayout";
import Footer from "./component/Footer";
import logo from "./images/logo.png";

import TabsFor from "./component/TabsFor";

const Home = () => {
  return (
    <>
      <WebLayout _sclass="title pt-0" _class_ID="title" _class="title_scn">
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
      </WebLayout>
      <WebLayout _sclass="tabs pt-0" _class_ID="tabs" _class="tabs_scn">
        <TabsFor />
      </WebLayout>
      <Footer/>
    </>
  );
};

export default Home;
