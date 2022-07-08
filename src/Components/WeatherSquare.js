import React from "react";

const WeatherSquare = ({ day, index }) => {
  return (
    <div key={index}>
      <div className="block">
        <div className="title_day">
          <b>24-HOUR FORECAST</b>
        </div>
        <div>{new Date(day.date).toDateString()}</div>
      </div>
      {day.hour.map((item, index) => {
        return (
          <div key={index} className="w-block">
            <div className="icon-wrapper">
              <img
                src={item.condition.icon}
                alt="weather-forecase-icon"
                height="40"
                width="40"
              />
            </div>
            <div>{new Date(item.time).toLocaleTimeString()}</div>
            <div>
              <b>{item.temp_c} &deg;C</b>
            </div>
            <div>{item.condition.text}</div>
          </div>
        );
      })}
    </div>
  );
};

export default WeatherSquare;
