import React, { useContext, useState } from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';

// Stylesheet
import './Search.css';

// Hooks
import useLocation from '../../hooks/useLocation';
import useError from '../../hooks/useError';

// Context
import { WeatherContext, ForecastContext } from '../../context/WeatherContext';

// Services
import {getWeather, getForecast} from '../../api/weather';

const Results = ({ results, fetchWeather }) => {

  if (results.length <= 10 && results.length > 0) {
    return (
      <div className='absolute top-12 w-full z-10'>
        <ul className='search-list p-2 bg-white rounded-md shadow-md'>
          <h3 className='text-center mb-4'>Please Select from the list below</h3>
          {results.map(result =>
            <li key={result.latitude + result.longitude + new Date()} className='active:scale-95 hover:bg-slate-200 border-b'>
              <button type="button" className='w-full h-full py-2 ease-in-out duration-75 active:scale-95' data-lat={result.latitude} data-lon={result.longitude} onClick={fetchWeather}>{result.label}</button>
            </li>
          )}
        </ul>
      </div>
    );
  }
};


const Search = ({ setIsLoading }) => {
  const [query, setQuery] = useState('');
  const results = useLocation(query);
  const {error, showError} = useError();

  const { setWeather } = useContext(WeatherContext);
  const { setForecast } = useContext(ForecastContext);

  const fetchWeather = (event) => {

    let latitude = event.target.dataset.lat;
    let longitude = event.target.dataset.lon;

    setIsLoading(true);

    getWeather(latitude, longitude)
      .then((response) => setWeather(response))
      .catch(() => showError('Unable to retrieve the data for that request'));
        
    getForecast(latitude, longitude)
      .then((response) => setForecast(response))
      .catch(() => showError('Unable to fetch Forecast data for that Location.'));

    setIsLoading(false);
        
  };

  const handleSubmit = () => {
    setQuery(document.querySelector('.search input').value);
  };

  return (
    <div className="search flex justify-center max-w-5xl mb-4">
      <div className="relative w-full">
        <input type="text" placeholder="Search by Town/City" className="w-full pl-4 pr-12 py-2 rounded-full" />
        <button type="button" className="search-btn absolute top-2/4 -translate-x-2 -translate-y-2/4 right-0 p-2 text-white bg-blue-400 rounded-full ease-in-out duration-200 active:scale-100 hover:scale-105" onClick={handleSubmit}><SearchIcon /></button>
        {error && <p>{error}</p>}
        {results && 
          <Results results={results} fetchWeather={fetchWeather} />
        }
      </div>
    </div>
  );
};
 
export default Search;