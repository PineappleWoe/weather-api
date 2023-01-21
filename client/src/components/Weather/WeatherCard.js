import React, { useContext } from 'react';

// Bootstrap Icons
import { Wind, Droplet } from 'react-bootstrap-icons';

// Context
import { UnitContext } from '../../context/WeatherContext';

const WeatherCard = ({ weather }) => {

  const { unit } = useContext(UnitContext);

  const setTemp = (temperature) => {
    if (unit === 'celsius') {
      return Math.round((temperature - 273.15) * 100) / 100;
    } else {
      return Math.round((9/5 * (temperature - 273.15) + 32) * Math.pow(10, 2)) / Math.pow(10, 2);
    }
  };

  return (
    <div className="max-w-sm p-4 mx-auto text-center text-white bg-gradient-to-r from-blue-400 to-indigo-500 rounded-xl shadow-md">
      <h2 className="text-4xl">{weather.name}</h2>
      <p className="opacity-50">{weather.sys.country}</p>
      <hr className="my-4 border-opacity-50"/>
      <div className="flex flex-col justify-center items-center py-2">
        <img src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} alt="Weather Icon" />
        <h3 className="text-3xl">
          {setTemp(weather.main.temp)}
          { '\u00B0' }{unit === 'celsius' ? 'C' : 'F' }
        </h3>
      </div>
      <div className="max-w-xs mx-auto">
        <h3 className="text-center text-2xl mb-4">{weather.weather[0].main} </h3>
        <div className="flex items-center mb-2 text-center">
          <p className="flex-1 flex items-center border-r"><Wind className="mx-2" /> Wind</p>
          <p className="flex-1">{weather.wind.speed}<em>m/s</em></p>
        </div>
        <div className="flex items-center mb-2 text-center">
          <p className="flex-1 flex items-center border-r"><Droplet className="mx-2" /> Humidity</p>
          <p className="flex-1">{weather.main.humidity}<em>%</em></p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;