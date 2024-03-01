import React from "react";
import Call from "../Svg/Call";
import LocationIcon from "../Svg/Location";
import StoreImage from "../../images/store-image.png";

const Card = ({ title, tabData = {} }) => {
  const {
    img = "",
    storeName = "",
    address = "",
    contactNumber = "",
    openingTime = "",
    Location = "",
  } = tabData;

  return (
    <div>
      <div className="flex justify-between items-center _card">
        <div className="store_image">
          <img src={img} alt={`${title}-image`} />
        </div>

        <div className="card_data">
          <h2 className="">{storeName}</h2>
          <p className="address">
            {address.split("\n").map((line, index) => (
              <React.Fragment key={index}>
                {line}
                <br />
              </React.Fragment>
            ))}
          </p>
          <div className="_buttons ">
            <div className="btn_red">
              <Call />
              {contactNumber}
            </div>
            <div className="btn_red time">{openingTime}</div>
            {Location && (
              <div className="get_direction_btn ">
                <a href={Location} target="_blank" rel="noopener noreferrer">
                  <LocationIcon />
                  Get Directions
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
