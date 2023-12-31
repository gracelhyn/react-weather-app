import SearchWeather from "./SearchWeather";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="wrapper mt-5 p-5">
            <SearchWeather city="Iloilo" />
          </div>
          <div className="container">
            <p>
              This project is coded by{" "}
              <a
                href="https://chimerical-cuchufli-aeb64b.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Grace Legaste
              </a>{" "}
              and is{" "}
              <a
                href="https://github.com/gracelhyn/react-weather-app"
                target="_blank"
                rel="noreferrer"
              >
                Open-sourced
              </a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
