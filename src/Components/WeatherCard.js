import React from "react";
import ForecastWidget from "./ForecastWidget";

const getActualDay = (time) => {
  const arr = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const obj = new Date(time);

  return arr[obj.getDay()] + "  " + obj.toLocaleTimeString();
};

const WeatherCard = ({ data }) => {
  return (
    <div className="weather-card">
      <div className="card-header">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 align="left">{data.location.name}</h3>
          <h4 align="right">{data.location.tz_id}</h4>
        </div>
        <h6>
          {data.location.region} {data.location.country}
        </h6>
      </div>
      <div className="card-body">
        <div>
          <div className="search_date_div">
            {getActualDay(data.location.localtime)}
          </div>
          <div className="weather_icon_div">
            <img
              src={data.current.condition.icon}
              alt={"weather" + data.location.name}
            />
          </div>
          <span>
            <h5
              style={{
                display: "inline-flex",
                fontSize: "24px",
                color: "black",
              }}
            >
              {data.current.temp_c} &deg;C
            </h5>
          </span>
        </div>

        <span className="desc_weather_text">{data.current.condition.text}</span>
        <div className="extra_info">
          <span>
            <b>Humidity :</b>{" "}
            <span className="extra_val">{data.current.humidity} %</span>
          </span>
          <span>
            <b>Ultra-Violet Index :</b>{" "}
            <span className="extra_val">{data.current.uv}</span>
          </span>
          <span>
            <b>Wind Speed :</b>{" "}
            <span className="extra_val">{data.current.wind_kph} km/hr </span>
          </span>
        </div>
        <div className="widget-div">
          {data.forecast.forecastday.map((item) => {
            return <ForecastWidget day={item} key={item.date} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
