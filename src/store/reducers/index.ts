import { combineReducers } from "redux";
import weatherReducer from "./weatherReducer";
import { initialWeatherState, IWeatherState } from "./weatherReducer";

export interface IState {
  weather: IWeatherState;
}

export const initialState: IState = {
  weather: initialWeatherState
};

export default combineReducers({
  weather: weatherReducer
});