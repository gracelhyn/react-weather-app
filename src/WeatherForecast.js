import React from "react";
import "./styles/styles.css";

export default function WeatherForecast(props) {
  return (
    <div className="col-2">
      <div className="weather-forecast-day">{props.day}</div>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
        alt="weather icon"
        width="60"
      />
      <div className="weather-forecast-temp">
        <span className="fs-6">28 °C </span>
        <span className="fs-7">82 °F</span>
      </div>
    </div>
  );
}
