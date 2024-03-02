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
              <Link to="https://www.facebook.com/RedCowDairy">
                <Facebook />
              </Link>
            </div>
            <div className="">
              <Link to="https://www.instagram.com/redcowdairy/?hl=en">
                <Instagram />
              </Link>
            </div>

            <div className="">
              <Link to="https://www.linkedin.com/checkpoint/challenge/AgFLPcsSIH3Q6AAAAY3945N7I-s6k9X0uCsh1AGTRw8KovCk3Tp7KQOk_EnRSiCa8Jp_IrIDjQJek-01qw9WsAtplMfE1Q?ut=03pD5OMdmfJH81">
                <LinkedIn />
              </Link>
            </div>
            <div className="">
              <Link to="https://www.youtube.com/@RedcowdairyInKolkata">
                <Youtube />
              </Link>
            </div>
            <div className="">
              <Link to="https://twitter.com/redcowdairykol">
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
