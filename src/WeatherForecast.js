import React from "react";
import axios from "axios";
import "./styles/styles.css";
import { InfinitySpin } from "react-loader-spinner";

export default function WeatherForecast(props) {
  if (props.lat && props.lon) {
    function handleResponse(response) {
      console.log(response.data);
    }
    let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,hourly,minutely&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
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
  } else {
    return <InfinitySpin width="200" color="#4fa94d" />;
  }
}
