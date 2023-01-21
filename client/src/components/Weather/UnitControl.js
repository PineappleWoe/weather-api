import React, { useContext } from 'react';

// Context
import { UnitContext } from '../../context/WeatherContext';

const UnitControl = () => {
  const { unit, setUnit } = useContext(UnitContext);

  const handleUnit = () => {
    if (unit === 'celsius') {
      setUnit('fahrenheit');
    } else {
      setUnit('celsius');
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <p className='hidden md:block mr-4 opacity-50'>Switch Mode</p>
      <button className='w-10 h-10 text-dark border border-slate-800 rounded-full ease duration-100 hover:text-white hover:bg-slate-800 active:scale-95' onClick={handleUnit}>{ '\u00B0' } {unit === 'celsius' ? 'F' : 'C'}</button>
    </div>
  );
};
 
export default UnitControl;