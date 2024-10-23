import React, { useState } from "react";
import "./Style.css";

const Clicker = () => {
  const [clicks, setClicks] = useState(0);
  const [milliseconds, setMilliseconds] = useState(0);
  const [intervalId, setIntervalId] = useState(null);

  const start = () => {
    if (!intervalId) {
      setClicks(0);
      setMilliseconds(0);
      const id = setInterval(() => {
        setMilliseconds(prev => prev + 10);
      }, 10);
      setIntervalId(id);
    }
  };

  const stop = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const reset = () => {
    setClicks(0);
    setMilliseconds(0);
    clearInterval(intervalId);
    setIntervalId(null);
  };

  const handleClick = () => {
    setClicks(prev => prev + 1);
  };

  const clicksPerSecond = milliseconds > 0 ? (clicks / (milliseconds / 1000)).toFixed(2) : 0;

  return (
    <div className="container">
      <div className="clicks">Клики: {clicks}</div>
      <div className="stopwatch">Время: {milliseconds} мс</div>
      <div className="clicksPerSecond">Кликов в секунду: {clicksPerSecond}</div>
      <button onClick={start}>Старт</button>
      <button onClick={stop}>Стоп</button>
      <button onClick={reset}>Сброс</button>
      <button onClick={handleClick}>Кликни меня!</button>
    </div>
  );
};

export default Clicker;
