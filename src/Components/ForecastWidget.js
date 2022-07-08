import React from "react";
import WeatherSquare from "./WeatherSquare";

const ForecastWidget = ({ day, key }) => {
  return (
    <div className="scrollable-div-wf">
      <WeatherSquare day={day} />;
    </div>
  );
};

export default ForecastWidget;
