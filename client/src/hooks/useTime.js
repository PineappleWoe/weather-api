import { useEffect, useState } from 'react';

const useTime = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString('en-GB', { hour: 'numeric', minute: 'numeric', hour12: true }));
  const date = new Date().toLocaleDateString('en-gb', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });


  useEffect(() => {
    const updateTime = () => setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', hour12: true }));
    }, 60000);

    return updateTime;
  });

  return {time, date};
};

export default useTime;