import React, { useContext, useState } from 'react';
import { Search } from 'react-bootstrap-icons';

// Stylesheet
import './Search.css';

// Services
import getWeather from '../../api/weather';
import getForecast from '../../api/forecast';

// Context
import { WeatherContext } from '../../context/WeatherContext';
import { ForecastContext } from '../../context/ForecastContext';

const SearchModule = ({ query, setQuery, locations, setIsLoading }) => {

  const { setWeather } = useContext(WeatherContext);
  const { setForecast } = useContext(ForecastContext);
    
  const [error, setError] = useState('');

  const handleError = (error) => {
    setError(error);
    setTimeout(() => setError(''), 5000);
  };

  const getWeatherData = (latitude, longitude) => {
    setIsLoading(true);
    setError('');

    getWeather(latitude, longitude)
      .then((response) => {
        setWeather(response);
      })
      .catch(() => {
        handleError('Unable to retrieve the data for that request');
      });
        
    getForecast(latitude, longitude)
      .then((response) => setForecast(response))
      .catch(() => {
        handleError('Unable to fetch Forecast data for that Location.');
      });

    setIsLoading(false);
        
  };

  const handleSubmit = (latitude, longitude) => {

    if (!latitude && !longitude && locations.length > 0) {
      latitude = locations[0].latitude;
      longitude = locations[0].longitude;
    }
        
    if (locations.length === 0) {
      setError('Please use a more specific Keyword/Location.');
      return setTimeout(() => setError(''), 5000);
    }
        
    getWeatherData(latitude, longitude);
        
  };

  const assignValues = (event) => {

    handleSubmit(event.target.dataset.lat, event.target.dataset.lon);

  };

  return (
    <div className="search flex justify-center max-w-5xl mb-4">
      {error && 
        <div className='fixed top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 p-3 w-full  text-red-600'>
          <p className='p-4 text-center bg-white shadow-xl'>{error}</p>
        </div>
      }
      <div className="relative w-full">
        <input type="text" placeholder="Search by Town/City" className="w-full pl-4 pr-12 py-2 rounded-full" value={query} onChange={(e) => setQuery(e.target.value)} />
        <button type="button" className="search-btn absolute top-2/4 -translate-x-2 -translate-y-2/4 right-0 p-2 text-white bg-blue-400 rounded-full ease-in-out duration-200 active:scale-100 hover:scale-105" onClick={(e) => handleSubmit(e.target.dataset.lat, e.target.dataset.lon)}><Search /></button>
        <div className='absolute top-12 w-full z-10'>
          {locations.length !== 0 && 
            <ul className='search-list p-2 bg-white rounded-md shadow-md'>
              <h3 className='text-center mb-4'>Please Select from the list below</h3>
              {locations.map(location => {
                return (
                  <li key={location.label} className='active:scale-95 hover:bg-slate-200 border-b'>
                    <button type="button" className='w-full h-full py-2 ease-in-out duration-75 active:scale-95' data-lat={location.latitude} data-lon={location.longitude} onClick={assignValues}>{location.label}</button>
                  </li>
                );
              })}
            </ul>
          }
        </div>
      </div>
    </div>
  );
};
 
export default SearchModule;