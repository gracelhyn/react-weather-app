import React, { useState } from "react";
import axios from "axios";
import "./styles/styles.css";
import { InfinitySpin } from "react-loader-spinner";

export default function WeatherForecast(props) {
  let [forecasts, setForecasts] = useState([]);

  function formatDay(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  if (props.lat && props.lon) {
    function handleResponse(response) {
      // console.log(response.data);
      setForecasts(response.data.daily);
    }
    let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=current,hourly,minutely&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <>
        {forecasts.map(function (forecast, index) {
          if (index < 6) {
            return (
              <div className="col-2" key={index}>
                <div className="weather-forecast-day">
                  {formatDay(forecast.dt)}
                </div>
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
            return null;
          }
        })}
      </>
    );
  } else {
    return <InfinitySpin width="200" color="#4fa94d" />;
  }
}
