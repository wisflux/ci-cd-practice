import { useEffect, useState } from "react";
import "./App.css";

const openWeatherApiKey = process.env.REACT_APP_OPEN_WEATHER_API;
const server = process.env.REACT_APP_SERVER;

const cityName = "jaipur";
function App() {
  const [weatherData, setWeatherData] = useState();
  const [tempreatureInCelsius, setTempreatureInCelsius] = useState();

  const getTodayWeatherData = async () => {
    if (openWeatherApiKey) {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${openWeatherApiKey}`
      );
      const data = await response.json();
      console.log(data);
      setWeatherData(data);
    }
  };
  const convertToCelcius = async (temperature) => {
    const response = await fetch(`${server}/k2c?temperature=${temperature}`);
    const data = await response.json();
    setTempreatureInCelsius(data.temperature);
  };

  useEffect(() => {
    if (weatherData) {
      convertToCelcius(weatherData.main.temp);
    }
  }, [weatherData]);
  
  return (
    <div className="App">
      <button onClick={getTodayWeatherData}>Get data</button>
      {weatherData && (
        <div>
          City name: {cityName}
          Temperature: {weatherData.main.temp} K
          {tempreatureInCelsius && <p>Temperature: {tempreatureInCelsius}</p>}
          Humidity: {weatherData.main.humidity}
        </div>
      )}
    </div>
  );
}

export default App;
