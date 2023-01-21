import { createContext } from 'react';

const WeatherContext = createContext([]);
const ForecastContext = createContext([]);
const UnitContext = createContext({
  unit: 'celsius',
  setUnit: () => {}
});

export { WeatherContext, ForecastContext, UnitContext };