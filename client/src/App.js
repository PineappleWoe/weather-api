import React, { useEffect, useState } from 'react';

// Stylesheet
import './App.css';
import Weather from './pages/Weather';

// Services
import getLocation from './api/location';

// Context
import { WeatherContext } from './context/WeatherContext';
import { UnitContext } from './context/UnitContext';
import { ForecastContext } from './context/ForecastContext';

function App() {

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('celsius');
  const [locations, setLocations] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    getLocation(query)
      .then(response => setLocations(response.data))
      .catch(err => console.log(err));
  }, [query]);

  return (
    <div className="app flex justify-center items-center min-h-screen bg-gradient-to-br from-orange-200 via-sky-200  to-violet-400 backdrop-blur-3xl">
      <WeatherContext.Provider value={{ weather, setWeather }} >
        <ForecastContext.Provider value={{ forecast, setForecast }} >
          <UnitContext.Provider value={{ unit, setUnit }}>
            <Weather query={query} setQuery={setQuery} locations={locations} />
          </UnitContext.Provider>
        </ForecastContext.Provider>
      </WeatherContext.Provider>
      {console.log(forecast)}
    </div>
  );
}

export default App;
