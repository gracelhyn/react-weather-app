import React from "react";
import "./styles/styles.css";

export default function WeatherForecast(props) {
  return (
    <div class="col-2">
      <div class="weather-forecast-day">{props.day}</div>
      <img
        src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/rain-day.png"
        alt="weather icon"
        width="60"
      />
      <div class="weather-forecast-temp">
        <span class="fs-6">28 °C </span>
        <span class="fs-7">82 °F</span>
      </div>
    </div>
  );
}
