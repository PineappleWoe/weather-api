import React, { useContext, useState } from 'react';
import { Search as SearchIcon } from 'react-bootstrap-icons';

// Stylesheet
import './Search.css';

// Hooks
import useLocation from '../../hooks/useLocation';

// Context
import { WeatherContext, ForecastContext } from '../../context/WeatherContext';

// Services
import {getWeather, getForecast} from '../../api/weather';

const Results = ({ results, fetchWeather }) => {

  if (results.length <= 10 && results.length > 0) {
    return (
      <div className='absolute top-12 w-full z-10'>
        <ul className='search-list max-h-64 p-2 bg-white rounded-md shadow-md overflow-y-scroll'>
          <h3 className='text-center font-bold mb-4'>Please Select from the list below</h3>
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


const Search = ({ setIsLoading, showError }) => {
  const [query, setQuery] = useState('');
  const {location: results, error} = useLocation(query);

  const { setWeather } = useContext(WeatherContext);
  const { setForecast } = useContext(ForecastContext);

  const fetchWeather = async (result) => {

    let latitude = result.target.dataset.lat;
    let longitude = result.target.dataset.lon;

    setIsLoading(true);

    await getWeather(latitude, longitude)
      .then((response) => setWeather(response))
      .catch(() => showError('Unable to retrieve the data for that request'));
        
    await getForecast(latitude, longitude)
      .then((response) => setForecast(response))
      .catch(() => showError('Unable to fetch forecast data for that location.'));

    setIsLoading(false);
        
  };

  const handleSubmit = () => {
    const fieldToSearch = document.querySelector('.search input').value;

    if (fieldToSearch.length < 3) {
      return showError('Please use at least 3 Characters');
    }

    if (error) {
      return showError(error);
    }
    
    setQuery(document.querySelector('.search input').value);

  };

  const handlePress = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <div className="search flex justify-center max-w-5xl mb-4">
      <div className="relative w-full">
        <input type="text" placeholder="Search by Town/City" className="w-full pl-4 pr-12 py-2 rounded-full" onKeyDown={handlePress} />
        <button type="button" className="search-btn absolute top-2/4 -translate-x-2 -translate-y-2/4 right-0 p-2 text-white bg-blue-400 rounded-full ease-in-out duration-200 active:scale-100 hover:scale-105" onClick={handleSubmit}><SearchIcon /></button>
        {results && 
          <Results results={results} fetchWeather={fetchWeather} />
        }
      </div>
    </div>
  );
};
 
export default Search;