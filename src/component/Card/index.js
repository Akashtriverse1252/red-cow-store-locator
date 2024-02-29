import React from "react";
import store from "../../images/store-image.png";
import Call from "../Svg/Call";
import Location from "../Svg/Location";

const index = () => {
  return (
    <div>
      <div className="flex justify-between items-center _card">
        <div className="store_image">
          <img src={store} alt="store-image" />
        </div>

        <div className="card_data">
          <h2 className="">Alambazar</h2>
          <p className="address">
            62 Deshbandhu Road,
            <br />
            Near Kalitala Math
            <br />
            Kolkata - 700035
          </p>
          <div className="_buttons mt-6">
            <div className="">
              <span className="btn_red">
                <Call />
                +91 6292-211239
              </span>
            </div>
            <div className="">
              <span className="btn_red time">Timings: 10 am-11:30 Pm</span>
            </div>
            <div className="">
              <span className="get_direction_btn "><Location/>Get Directions</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;

