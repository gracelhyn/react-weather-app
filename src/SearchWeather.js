import React, { useState } from "react";
import "./styles/styles.css";
import axios from "axios";
// import ShowWeather from "./ShowWeather";
import WeatherTemperature from "./WeatherTemperature";
import WeatherForecast from "./WeatherForecast";

export default function SearchWeather(props) {
  let [city, setCity] = useState(props.city);
  let [ready, setReady] = useState(false);
  let [weatherData, setWeaherData] = useState();

  // const currentDay = new Date().getDay();

  function handleSubmit(e) {
    e.preventDefault();
    search();
  }

  function getCity(e) {
    setCity(e.target.value);
  }

  function handleResponse(response) {
    // console.log(response.data.coord);
    // setLatitude(response.data.coord.lat);
    setWeaherData({
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      city: response.data.name,
      country: response.data.sys.country,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`,
    });
    setReady(true);
  }

  function search() {
    let apiKey = "7746bdeabca928cfedcad71e52fd9d66";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (ready) {
    return (
      <>
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="col-6">
              <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search City"
                  aria-label="Search City"
                  aria-describedby="button-addon2"
                  id="input-city"
                  onChange={getCity}
                />
                <input
                  className="btn btn-outline-secondary"
                  type="submit"
                  id="button-addon2"
                  value="🔍"
                />
              </div>
            </div>
          </form>
        </div>
        {/* <ShowWeather cityName={city} /> */}
        <div className="row">
          <div className="col-7 current-weather">
            <h1 id="city" className="city">
              {weatherData.city}, {weatherData.country}
            </h1>
            <h3 id="description" className="description">
              {weatherData.description}
            </h3>
          </div>
          <div className="col-8">
            <img
              src={weatherData.iconUrl}
              alt="weather icon"
              className="weather-icon"
              id="weather-icon"
            />
            <WeatherTemperature celcius={weatherData.temperature} />
          </div>
          <div className="col-4">
            <ul className="weather-details">
              <li id="humidity">
                Humidity: {Math.round(weatherData.humidity)}%
              </li>
              <li id="wind">Wind: {Math.round(weatherData.wind)}km/h</li>
            </ul>
          </div>
        </div>
        <div className="row weather-forecast mt-4" id="forecast">
          <WeatherForecast coordinates={weatherData.coordinates} />
        </div>
      </>
    );
  } else {
    search();
    return <div>Loading. . .</div>;
  }
}
