import React, { useState } from "react";
import "./styles/styles.css";
import WeatherForecast from "./WeatherForecast";
import ShowWeather from "./ShowWeather";

export default function SearchWeather() {
  let [input, setInput] = useState("Iloilo");
  let [city, setCity] = useState("Iloilo");

  function handleSubmit(e) {
    e.preventDefault();
    setCity(input);
  }

  function getCity(e) {
    setInput(e.target.value);
  }
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
      <ShowWeather cityName={city} />
      <div className="row weather-forecast mt-4" id="forecast">
        <WeatherForecast day="Sun" />
        <WeatherForecast day="Mon" />
        <WeatherForecast day="Tue" />
        <WeatherForecast day="Wed" />
        <WeatherForecast day="Thu" />
        <WeatherForecast day="Fri" />
      </div>
    </>
  );
}
