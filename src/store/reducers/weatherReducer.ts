import produce from "immer";
import { ApiStatus, IWeatherModel } from "../models";
import { WeatherAction, WeatherActionTypes } from "../actions/weatherActions";

export const initialWeatherState: IWeatherState = {
  loadingStatus: ApiStatus.INITIAL,
  addingStatus: ApiStatus.INITIAL,
  weathers: [],
};

export default function weatherReducer(
  state: IWeatherState = initialWeatherState,
  action: WeatherAction
): IWeatherState {
  return produce(state, (draft) => {
    switch (action.type) {
      case WeatherActionTypes.ADD_WEATHER:
      case WeatherActionTypes.ADDING_WEATHER:
        draft.loadingStatus = ApiStatus.LOADING;
        break;

      case WeatherActionTypes.ADDING_WEATHER_FAILED:
        draft.loadingStatus = ApiStatus.FAILED;
        break;

      case WeatherActionTypes.ADDED_WEATHER:
        draft.loadingStatus = ApiStatus.LOADED;
        draft.weathers = [...draft.weathers, action.payload.weather];
        break;

      case WeatherActionTypes.UPDATE_WEATHER:
        draft.loadingStatus = ApiStatus.LOADED;
        const updatedWeather = action.payload.weather;
        const index = draft.weathers.findIndex(w => w.location.name === updatedWeather.location.name);
        if (index !== -1) {
          draft.weathers[index] = updatedWeather;
        }
        break;
    }
  });
}

export interface IWeatherState {
  loadingStatus: ApiStatus;
  addingStatus: ApiStatus;
  weathers: IWeatherModel[];
}