import React from "react";
import WebLayout from "./component/WebLayout";
import Card from "./component/Card";
import logo from "./images/logo.png";

import TabsFor from "./component/TabsFor";

const Home = () => {
  return (
    <>
      <WebLayout _sclass="title" _class_ID="title" _class="title_scn">
        <div className="text-center  logo">
          <img alt="Red Cow Ice Cream Logo" className="mx-auto  " src={logo} />
          <h1 className=" title_heading">
            Discover scoops of happiness near you
          </h1>
        </div>
      </WebLayout>
      <WebLayout _sclass="tabs" _class_ID="tabs" _class="tabs_scn">
        <TabsFor />
        <Card />
      </WebLayout>
    </>
  );
};

export default Home;
