import React from "react";
import "./styles/styles.css";

export default function SearchWeather() {
  return (
    <>
      <div className="row">
        <form>
          <div className="col-6">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search City"
                aria-label="Search City"
                aria-describedby="button-addon2"
                id="input-city"
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
      <div className="row">
        <div className="col-7 current-weather">
          <h1 id="city" className="city">
            Iloilo, Philippines
          </h1>
          <h3 id="description" className="description">
            Broken clouds
          </h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8">
          <img
            src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-night.png"
            alt="weather icon"
            className="weather-icon"
            id="weather-icon"
          />
          <span className="temperature" id="temperature">
            0
          </span>
          <span className="temp-unit">
            <a href="/" id="celcius" class="active">
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
            <li id="humidity">Humidity: 10%</li>
            <li id="wind">Wind: 3km/h</li>
          </ul>
        </div>
      </div>
    </>
  );
}
