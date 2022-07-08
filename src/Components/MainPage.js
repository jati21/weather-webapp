import React from "react";
import { Icon, Input, InputGroup } from "rsuite";
import { api_get } from "../config/helpers";
import { useWeather } from "../context/weather.context";
import WeatherCard from "./WeatherCard";

const MainPage = () => {
  const { result, setResult } = useWeather();

  const searchWeather = () => {
    const inp = document.getElementById("search_area").value;
    api_get(inp).then((info) => setResult(info));
  };

  return (
    <div>
      <div className="page-header">WEATHER ME</div>
      <div className="title-desc">
        View weather and all related information of a place or region
      </div>
      <div className="inputWrapper">
        <InputGroup style={{ width: "400px" }}>
          <Input placeholder="Enter a city or an area" id="search_area" />
          <InputGroup.Button
            onClick={() => {
              searchWeather();
            }}
          >
            <Icon icon="search" />
          </InputGroup.Button>
        </InputGroup>
      </div>
      {result && <WeatherCard data={result} />}
    </div>
  );
};

export default MainPage;
