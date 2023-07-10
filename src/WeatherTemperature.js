import React, { useState } from "react";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celcius");
  function showFahrenheit(e) {
    e.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelcius(e) {
    e.preventDefault();
    setUnit("celcius");
  }

  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }

  if (unit === "celcius") {
    return (
      <>
        <span className="temperature" id="temperature">
          {Math.round(props.celcius)}
        </span>
        <span className="temp-unit">
          °C |{" "}
          <a href="/" id="fahrenheit" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </>
    );
  } else {
    return (
      <>
        <span className="temperature" id="temperature">
          {Math.round(fahrenheit())}
        </span>
        <span className="temp-unit">
          <a href="/" id="fahrenheit" onClick={showCelcius}>
            °C{" "}
          </a>
          | °F
        </span>
      </>
    );
  }
}
