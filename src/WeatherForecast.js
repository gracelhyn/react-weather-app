import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles/styles.css";
import { InfinitySpin } from "react-loader-spinner";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecasts, setForecasts] = useState([]);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function formatDay(timeStamp) {
    let date = new Date(timeStamp * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  function handleResponse(response) {
    // console.log(response.data);
    setForecasts(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <>
        {forecasts.map((forecast, index) => {
          if (index < 6) {
            return (
              <div className="col-2" key={index}>
                <div className="weather-forecast-day">
                  {formatDay(forecast.dt)}
                </div>
                <img
                  src={`https://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`}
                  alt="weather icon"
                  width="60"
                />
                <div className="weather-forecast-temp">
                  <span className="fs-6">
                    {Math.round(forecast.temp.day)} °C{" "}
                  </span>
                  <span className="fs-7">
                    {Math.round((forecast.temp.day * 9) / 5 + 32)} °F
                  </span>
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
    let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&exclude=current,hourly,minutely&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return <InfinitySpin width="200" color="#4fa94d" />;
  }
}
