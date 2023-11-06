import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Overlay = ({ data }) => {
  if (data) {
    console.log(data);
  }
  return (
    <div className="weather_card">
      <span className="close_button">
        <AiOutlineClose />
      </span>
      <h2>Weather App</h2>
      {data && (
        <div>
          <div className="name">
            Name:<span className="data_span">{data.name}</span>
          </div>
          <div className="temperature">
            Temp:<span className="data_span">{data.main.temp}</span>
          </div>
          <div className="main_data">
            Main:<span className="data_span">{data.weather[0].main}</span>
          </div>
          <div className="description_data">
            Description:<span className="data_span">{data.weather[0].description}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default Overlay;
