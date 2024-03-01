import React from "react";
import { Facebook } from "../Svg/Facebook";
import { LinkedIn } from "../Svg/LinkedIn";
import { Twitter } from "../Svg/Twitter";
import Youtube from "../Svg/Youtube";
import { Instagram } from "../Svg/Instagram";
import { Link } from "react-router-dom";
import ContainerLayout from "../ContainerLayout";

const index = () => {
  return (
    <>
      <ContainerLayout
        _sclass="Footer pb-0"
        _class_ID="Footer"
        _class="Footer_scn"
      >
        <div
          className="footer_cnt"
          data-aos-easing="ease-in"
          data-aos-once="true"
          data-aos-duration="600"
          data-aos="fade-up"
        >
          <p
            data-aos-easing="ease-in-sine"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-duration="400"
            data-aos="fade-in"
          >
            Goodness awaits you. Follow us today!
          </p>
          <div
            className="socail_icon "
            data-aos-easing="ease-in"
            data-aos-delay="200"
            data-aos-once="true"
            data-aos-duration="400"
            data-aos="fade-in"
          >
            <div className="">
              <Link to="https://www.facebook.com/assurepathlabsjalandhar/">
                <Facebook />
              </Link>
            </div>
            <div className="">
              <Link to="https://www.instagram.com/assurepathlabs/">
                <Instagram />
              </Link>
            </div>

            <div className="">
              <Link to="#">
                <LinkedIn />
              </Link>
            </div>
            <div className="">
              <Link to="#">
                <Youtube />
              </Link>
            </div>
            <div className="">
              <Link to="#">
                <Twitter />
              </Link>
            </div>
          </div>
        </div>
      </ContainerLayout>
    </>
  );
};

export default index;
