import React, { useState } from "react";
import "./styles/styles.css";
import ShowWeather from "./ShowWeather";

export default function SearchWeather() {
  let [input, setInput] = useState();
  let [city, setCity] = useState("Iloilo");

  // const currentDay = new Date().getDay();

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
    </>
  );
}
