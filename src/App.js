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
        </div>
      </header>
    </div>
  );
}

export default App;
