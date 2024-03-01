import React, { useState, useEffect } from "react";
import Card from "./Card/index";

const Index = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [citiesData, setCitiesData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://redcowdairy.in/api/fetch_locator_data.php"
        );

        if (!response.ok) {
          // Handle non-successful responses
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        setCitiesData(result);
      } catch (error) {
        // Handle fetch errors
        setError("Network issue. Please check your internet connection.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <div className="tab-cnt">
        {loading ? (
          <p className="loader_parent"><span className="loader"></span></p>
        ) : error ? (
          <p className="internet_error">{error}</p>
        ) : (
          <div>
            <div
              className="tabs-scn"
              data-aos-easing="ease-in-sine"
              data-aos-once="true"
              data-aos-duration="600"
              data-aos="fade-up"
            >
              <div className="tab-buttons">
                {citiesData &&
                  Object.keys(citiesData).map((city, index) => (
                    <button
                      key={index}
                      className={activeTab === index ? "active" : ""}
                      onClick={() => handleTabClick(index)}
                    >
                      {city}
                    </button>
                  ))}
              </div>
              <div className="tab-content w-full">
                {citiesData &&
                  Object.values(citiesData).map((cityData, index) => {
                    return (
                      <div
                        key={index}
                        className={`tab_pane ${
                          activeTab === index ? "visible" : ""
                        }`}
                      >
                        <div
                          style={{
                            display: activeTab === index ? "block" : "none",
                          }}
                        >
                          {cityData.map((locationData, locationIndex) => (
                            <Card
                              key={locationIndex}
                              title={locationData.title}
                              tabData={locationData.tabData || {}}
                            />
                          ))}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Index;
