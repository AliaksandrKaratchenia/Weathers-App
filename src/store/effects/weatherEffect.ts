import { call, put, takeEvery, select } from "redux-saga/effects";
import axios from "axios";
import {
  WeatherActionTypes,
  IAddWeatherAction,
  addingWeather,
  addedWeather,
  addingWeatherFailed,
  updateWeather
} from "../actions/weatherActions";
import config from "../../app.config.json";
import { IState } from "../reducers";
import { IWeatherModel } from "../models";

function* getWeather(action: IAddWeatherAction) {
  const city = action.payload.city;
  try {
    const weathers: IWeatherModel[] = yield select((store: IState) => store.weather.weathers);
    
    const response = yield loadWeather(city);
    if (response.data.error) {
      yield put(addingWeatherFailed(city));
    } else {
      const loadedWeather: IWeatherModel = response.data;
      const storeCityWeather = weathers.find(w => w.location.name === loadedWeather.location.name);
      if (storeCityWeather) {
        yield put(updateWeather(response.data));
      } else {
        yield put(addedWeather(response.data));
      }
    }
  } catch {
    yield put(addingWeatherFailed(city));
  }
}

function* watchGetWeather() {
  yield takeEvery(WeatherActionTypes.ADD_WEATHER, getWeather);
}

function* loadWeather(city: string) {
  yield put(addingWeather(city));
  const response = yield call(axios.get, `${config.WEATHER_URL}&query=${city}`);
  return response;
}

export default watchGetWeather;