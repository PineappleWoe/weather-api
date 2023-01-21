import React, { useState } from 'react';

// Stylesheet
import './App.css';

// Components
import Nav from './components/Nav/Nav';
import Weather from './pages/Weather';
import Footer from './components/Footer/Footer';

// Context
import { WeatherContext, ForecastContext, UnitContext } from './context/WeatherContext';
function App() {

  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('celsius');

  return (
    <div className="app flex flex-col justify-between items-center min-h-screen bg-gradient-to-br from-orange-200 via-sky-200  to-violet-400 backdrop-blur-3xl">
      <Nav />
      <WeatherContext.Provider value={{ weather, setWeather }} >
        <ForecastContext.Provider value={{ forecast, setForecast }} >
          <UnitContext.Provider value={{ unit, setUnit }}>
            <Weather />
          </UnitContext.Provider>
        </ForecastContext.Provider>
      </WeatherContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
