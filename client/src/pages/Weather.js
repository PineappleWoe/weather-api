import React, { useContext, useState } from 'react';

// Components
import SearchModule from '../components/Search/Search';
import UnitControl from '../components/Weather/UnitControl';
import WeatherCard from '../components/Weather/WeatherCard';
import ForecastCard from '../components/Weather/ForecastCard';
import Slider from '../components/Slider/Slider';

// Context
import { WeatherContext } from '../context/WeatherContext';
import { ForecastContext } from '../context/ForecastContext';

// Hooks
import useTime from '../hooks/useTime';

// Assets
import Background from '../assets/wave.svg';

const Weather = ({ query, setQuery, locations }) => {

  const { weather } = useContext(WeatherContext);
  const { forecast } = useContext(ForecastContext);

  const [isLoading, setIsLoading] = useState(false);

  const {time, date} = useTime();

  return (
    <div className="max-w-7xl mx-auto p-4">
      <div className="flex flex-col-reverse md:flex-row justify-center w-full mx-auto text-gray-800 bg-slate-50 bg-opacity-10 backdrop-blur-lg rounded-3xl shadow-lg">
        <div className="md:w-3/5 p-4 bg-blue-100 md:rounded-l-3xl" style={{ backgroundImage: `url(${Background})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
          <div className="flex justify-center items-center mb-4">
            <div className="flex-1">
              <h4 className="text-4xl font-bold text-blue-600">{time}</h4>
              <p className="opacity-50">{date}</p>
            </div>
            <div>
              <UnitControl />
            </div>
          </div>
          <div className="mb-4">
            <p className="font-bold text-2xl text-blue-600">{time.split(' ')[1] === 'AM' ? 'Good Morning' : 'Good Afternoon'}!</p>
            <p className="italic opacity-50">This service makes use of <strong>OpenWeatherMap</strong> and <strong className="font-bold">positionstack</strong> Free-Tier API services for Weather and Country data respectively.</p>
          </div>
          {forecast.length > 0 &&
            <>
              <p className="font-bold text-2xl text-blue-600 mb-4">Forecast:</p>
              <Slider RenderedComponent={ForecastCard} items={forecast} />
              <p className="italic opacity-50"><small>Provided data for forecasted weather is based on estimates for 12:00PM on selected days.</small></p>
            </>
          }
        </div>
        <div className="w-full md:w-2/5 p-4" >
          <SearchModule query={query} setQuery={setQuery} locations={locations} setIsLoading={setIsLoading} />
          {isLoading 
            ?
            <p className="text-center">
                Loading...
            </p>
            :
            Object.keys(weather).length > 0 && <WeatherCard weather={weather}/>
          }
        </div>
      </div>
    </div>
  );
};
 
export default Weather;