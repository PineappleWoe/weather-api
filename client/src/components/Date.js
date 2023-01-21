import React from 'react';

// Hooks
import useTime from '../hooks/useTime';

const Date = () => {
  const { time, date } = useTime();
    
  return (
    <div className="flex-1">
      <h4 className="text-4xl font-bold text-blue-600">{time}</h4>
      <p className="opacity-50">{date}</p>
    </div>
  );
};

const Greeting = () => {
  const { time } = useTime();

  return (
    <p className="font-bold text-2xl text-blue-600">{time.split(' ')[1] === 'AM' ? 'Good Morning' : 'Good Afternoon'}!</p>
  );
};
 
export { Date, Greeting };