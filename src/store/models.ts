export enum ApiStatus {
  LOADING = "loading",
  LOADED = "loaded",
  FAILED = "failed",
  INITIAL = "initial"
}

export interface ILocation {
  name: string;
  country: string;
  region: string;
  lat: string;
  lon: string;
  timezone_id: string;
  localtime: Date;
  localtime_epoch: number;
  utc_offset: string;
}

export interface ICurrentWeather {
  observation_time: Date;
  temperature: number;
  weather_code: number;
  weather_icons: string[];
  weather_descriptions: string[];
  wind_speed: number;
  wind_degree: number;
  wind_dir: string;
  pressure: number;
  precip: number;
  humidity: number;
  cloudcover: number;
  feelslike: number;
  uv_index: number;
  visibility: number;
}

export interface IWeatherModel {
  location: ILocation;
  current: ICurrentWeather;
}