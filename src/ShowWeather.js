import React, { useState } from "react";
import axios from "axios";

export default function ShowWeather(props) {
  let [ready, setReady] = useState(false);
  let [weatherData, setWeaherData] = useState();
  // let [latitude, setLatitude] = useState();
  // let [longitude, setLongitude] = useState();
  if (props.cityName) {
    function handleResponse(response) {
      // console.log(response.data);
      // setLatitude(response.data.coord.lat);
      setWeaherData({
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
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.cityName}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }

    if (ready) {
      return (
        <>
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
              <span className="temperature" id="temperature">
                {Math.round(weatherData.temperature)}
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
                <li id="humidity">
                  Humidity: {Math.round(weatherData.humidity)}%
                </li>
                <li id="wind">Wind: {Math.round(weatherData.wind)}km/h</li>
              </ul>
            </div>
          </div>
          <div className="row weather-forecast mt-4" id="forecast">
            {/* <WeatherForecast day="Sun" lat={latitude} lon={longitude} /> */}
            <div className="col-2">
              <div className="weather-forecast-day">Mon</div>
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
            <div className="col-2">
              <div className="weather-forecast-day">Tue</div>
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
            <div className="col-2">
              <div className="weather-forecast-day">Wed</div>
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
            <div className="col-2">
              <div className="weather-forecast-day">Thu</div>
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
            <div className="col-2">
              <div className="weather-forecast-day">Fri</div>
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
            <div className="col-2">
              <div className="weather-forecast-day">Sat</div>
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
          </div>
        </>
      );
    } else {
      search();
      return <div>Loading. . .</div>;
    }
  } else {
    // setDefaultCity("Manila");
    alert(props.cityName);
    return <div>Loading. . .</div>;
  }
}
