import SearchWeather from "./SearchWeather";
import "./styles/styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <div className="wrapper mt-5 p-5">
            <SearchWeather />
          </div>
          <div className="container">
            <p>
              This site is coded by Grace Lhyn Legaste and is{" "}
              <a href="https://github.com/gracelhyn/react-weather-app">
                Open-source
              </a>
            </p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
