import React, { useState } from "react";
import axios from "axios";
import WeatherForecast from "./WeatherForecast";

export default function ShowWeather(props) {
  let [name, setName] = useState();
  let [country, setCountry] = useState();
  let [temperature, setTemperature] = useState(0);
  let [description, setDescription] = useState();
  let [humidity, setHumidity] = useState();
  let [wind, setWind] = useState();
  let [icon, setIcon] = useState();

  function handleResponse(response) {
    console.log(response.data);
    setName(response.data.name);
    setCountry(response.data.sys.country);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`
    );
  }
  let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <>
      <div className="row">
        <div className="col-7 current-weather">
          <h1 id="city" className="city">
            {name}, {country}
          </h1>
          <h3 id="description" className="description">
            {description}
          </h3>
        </div>
        <div className="col-8">
          <img
            src={icon}
            alt="weather icon"
            className="weather-icon"
            id="weather-icon"
          />
          <span className="temperature" id="temperature">
            {Math.round(temperature)}
          </span>
          <span className="temp-unit">
            <a href="/" id="celcius" className="active">
              °C
            </a>{" "}
            |
            <a href="/" id="fahrenheit">
              °F
            </a>
          </span>
        </div>
        <div className="col-4">
          <ul className="weather-details">
            <li id="humidity">Humidity: {Math.round(humidity)}%</li>
            <li id="wind">Wind: {Math.round(wind)}km/h</li>
          </ul>
        </div>
      </div>
      <div className="row weather-forecast mt-4" id="forecast">
        <WeatherForecast day="Sun" />
      </div>
    </>
  );
}
