import React, { useState, useEffect } from 'react';

const CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div style={{border: '1px solid green', padding: '20px', margin: '10px'}}>
      <h2>завдання 3</h2>
      
      <div style={{border: '1px solid purple', padding: '15px', margin: '10px'}}>
        <TimeDisplay time={time} />
        <DateDisplay time={time} />
        <TimeZoneInfo />
      </div>
    </div>
  );
};

const TimeDisplay = ({ time }) => {
  return (
    <div style={{border: '1px solid blue', padding: '10px', margin: '10px', textAlign: 'center'}}>
      <h3>Поточний час:</h3>
      <div style={{fontSize: '2rem', fontWeight: 'bold', color: 'red'}}>
        {time.toLocaleTimeString('uk-UA')}
      </div>
    </div>
  );
};

const DateDisplay = ({ time }) => {
  return (
    <div style={{border: '1px solid orange', padding: '10px', margin: '10px'}}>
      <h4>Дата:</h4>
      <p><strong>Повна дата:</strong> {time.toLocaleDateString('uk-UA')}</p>
      <p><strong>День тижня:</strong> {time.toLocaleDateString('uk-UA', { weekday: 'long' })}</p>
      <p><strong>Місяць:</strong> {time.toLocaleDateString('uk-UA', { month: 'long' })}</p>
    </div>
  );
};

const TimeZoneInfo = () => {
  return (
    <div style={{border: '1px solid red', padding: '10px', margin: '10px'}}>
      <h4>Інформація про час:</h4>
      <p><strong>Часовий пояс:</strong> UTC+2 (Київ)</p>
      <p><strong>Літній час:</strong> Активний</p>
    </div>
  );
};

export default CurrentTime;
