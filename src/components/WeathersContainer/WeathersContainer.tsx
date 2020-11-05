import React, {  } from "react";
import { IWeatherModel } from "../../store/models";
import WeatherDetails from "../WeatherDetails/WeatherDetails";

interface IWeathersContainerProps {
  weathers: IWeatherModel[];
}

const WeathersContainer: React.FC<IWeathersContainerProps> = ({ weathers }) => {
  return (
      <div style={{ display:'flex' }}>
        {weathers.map((w, i) => <WeatherDetails key={i} weather={w}/>)}
      </div>
  );
};

export default WeathersContainer;