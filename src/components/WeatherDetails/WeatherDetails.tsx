import React, {  } from "react";
import { IWeatherModel } from "../../store/models";

interface IWeatherDetailsProps {
  weather: IWeatherModel;
}

const WeatherDetails: React.FC<IWeatherDetailsProps> = ({ weather }) => {
  return (
      <div>
          <div>{weather.location.name}</div>
          <div>{weather.location.country}</div>
          <div>{weather.current.observation_time}</div>
          <div>{weather.current.cloudcover}</div>
          <div>{weather.current.feelslike}</div>
        </div>
  );
};

export default WeatherDetails;