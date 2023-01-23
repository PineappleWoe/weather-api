import React, { useState } from 'react';

// Components
import Search from '../components/Search/Search';
import UnitControl from '../components/Weather/UnitControl';
import WeatherCard from '../components/Weather/WeatherCard';
import ForecastCard from '../components/Weather/ForecastCard';
import Slider from '../components/Slider/Slider';
import { Date, Greeting } from '../components/Date';

// Context
import { WeatherContext, ForecastContext, UnitContext } from '../context/WeatherContext';

// Hooks
import useLoading from '../hooks/useLoading';
import useError from '../hooks/useError';

// Assets
import Background from '../assets/wave.svg';

const Weather = () => {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);
  const [unit, setUnit] = useState('celsius');

  const [isLoading, setIsLoading] = useState(false);
  const loading = useLoading(isLoading);
  const { error, showError } = useError();

  return (
    <WeatherContext.Provider value={{ weather, setWeather }} >
      <ForecastContext.Provider value={{ forecast, setForecast }} >
        <UnitContext.Provider value={{ unit, setUnit }}>
          <div className="max-w-7xl w-full p-4">
            <div className="flex flex-col-reverse md:flex-row justify-center w-full mx-auto text-gray-800 bg-slate-50 bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-lg">
              <div className="weather-left md:w-3/5 p-4 bg-blue-100 md:rounded-l-3xl" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
                <div className="flex justify-center items-center mb-4">
                  <Date />
                  <div>
                    <UnitControl />
                  </div>
                </div>
                <div className="mb-4">
                  <Greeting />
                  <p className="italic opacity-50">This service makes use of <strong>OpenWeatherMap</strong> and <strong className="font-bold">positionstack</strong> Free-Tier API services for Weather and Country data respectively.</p>
                </div>
                {loading && <p className='text-center'>Loading...</p>}
                {forecast.length > 0 &&
            <div>
              <p className="font-bold text-2xl text-blue-600 mb-4">Forecast:</p>
              <Slider RenderedComponent={ForecastCard} items={forecast} />
              <p className="italic opacity-50"><small>Provided data for forecasted weather is based on estimates for 12:00PM on presented dates.</small></p>
            </div>
                }
              </div>
              <div className="weather-right w-full md:w-2/5 p-4" >
                <Search setIsLoading={setIsLoading} showError={showError} />
                {loading && <p className='text-center'>Loading...</p>}
                {error && <p className='text-center text-red-600'>{error}</p>}
                {Object.keys(weather).length > 0 && <WeatherCard weather={weather}/>}
              </div>
            </div>
          </div>
        </UnitContext.Provider>
      </ForecastContext.Provider>
    </WeatherContext.Provider>
  );
};
 
export default Weather;