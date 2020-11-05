import { IWeatherModel } from "../models";

export enum WeatherActionTypes {
  ADD_WEATHER = "weather/load",
  ADDING_WEATHER = "weather/loading",
  ADDED_WEATHER = "weather/loaded",
  ADDING_WEATHER_FAILED = "weather/loading_failed",
  UPDATE_WEATHER = "weather/update"
}

export function addWeather(city: string): IAddWeatherAction {
  return {
    type: WeatherActionTypes.ADD_WEATHER,
    payload: {
      city
    }
  };
}

export function addingWeather(city: string): IAddingWeatherAction {
  return {
    type: WeatherActionTypes.ADDING_WEATHER,
    payload: {
      city
    }
  };
}

export function addedWeather(weather: IWeatherModel): IAddedWeatherAction {
  return {
    type: WeatherActionTypes.ADDED_WEATHER,
    payload: {
      weather
    }
  };
}

export function addingWeatherFailed(city: string): IAddingWeatherFailedAction {
  return {
    type: WeatherActionTypes.ADDING_WEATHER_FAILED,
    payload: {
      city
    }
  };
}

export function updateWeather(weather: IWeatherModel): IUpdateWeatherAction {
  return {
    type: WeatherActionTypes.UPDATE_WEATHER,
    payload: {
      weather
    }
  };
}

export interface IAddWeatherAction {
  type: WeatherActionTypes.ADD_WEATHER,
  payload: {
    city: string;
  };
}

export interface IAddingWeatherAction {
  type: WeatherActionTypes.ADDING_WEATHER,
  payload: {
    city: string;
  };
}

export interface IAddedWeatherAction {
  type: WeatherActionTypes.ADDED_WEATHER;
  payload: {
    weather: IWeatherModel;
  };
}

export interface IAddingWeatherFailedAction {
  type: WeatherActionTypes.ADDING_WEATHER_FAILED,
  payload: {
    city: string;
  };
}

export interface IUpdateWeatherAction {
  type: WeatherActionTypes.UPDATE_WEATHER,
  payload: {
    weather: IWeatherModel;
  };
}

export type WeatherAction =
  | IAddWeatherAction
  | IAddingWeatherAction
  | IAddedWeatherAction
  | IAddingWeatherFailedAction
  | IUpdateWeatherAction;