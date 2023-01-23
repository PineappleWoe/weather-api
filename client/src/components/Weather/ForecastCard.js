import React, { useContext } from 'react';

// Boostrap Icons
import { Wind, Droplet } from 'react-bootstrap-icons';

// Context
import { UnitContext } from '../../context/WeatherContext';

const ForecastCard = ({ forecast }) => {

  const { unit } = useContext(UnitContext);
  const forecastDate = new Date(forecast.dt * 1000).toLocaleDateString('en-GB', { day: '2-digit', month: '2-digit', year: 'numeric' });

  const setTemp = (temperature) => {
    if (unit === 'celsius') {
      return Math.round((temperature - 273.15) * 100) / 100;
    } else {
      return Math.round((9/5 * (temperature - 273.15) + 32) * Math.pow(10, 2)) / Math.pow(10, 2);
    }
  };

  return (
    <div className="p-2 xl:px-6 px-4 mx-auto text-center text-white bg-gradient-to-r from-red-500 to-rose-700 rounded-xl shadow-lg">
      <div className="flex flex-col justify-center items-center py-2">
        <p>{forecastDate}</p>
        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} alt="Weather Icon" />
        <h3 className="text-xl">
          {setTemp(forecast.main.temp)}
          { '\u00B0' }{unit === 'celsius' ? 'C' : 'F' }
        </h3>
      </div>
      <div className="max-w-xs mx-auto">
        <h3 className="text-center text-xl mb-2">{forecast.weather[0].main} </h3>
        <div className="flex items-center mb-2 text-center">
          <p className="flex-1 flex items-center border-r"><Wind className="mx-2" /></p>
          <p className="flex-1 text-right">{forecast.wind.speed.toFixed(0)}<em>m/s</em></p>
        </div>
        <div className="flex items-center mb-2 text-center">
          <p className="flex-1 flex items-center border-r"><Droplet className="mx-2" /></p>
          <p className="flex-1 text-right">{forecast.main.humidity}<em>%</em></p>
        </div>
      </div>
    </div>
  );
};

export default ForecastCard;