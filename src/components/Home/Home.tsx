import React, { ChangeEvent, FormEvent, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addWeather } from "../../store/actions/weatherActions";
import { ApiStatus, IWeatherModel } from "../../store/models";
import { IState } from "../../store/reducers";
import WeathersContainer from "../WeathersContainer/WeathersContainer";

const Home: React.FC = () => {
  const weathers = useSelector<IState, IWeatherModel[]>(state => state.weather.weathers);
  const loadingStatus = useSelector<IState, ApiStatus>(state => state.weather.loadingStatus);
  const dispatch = useDispatch();
  const [city, setCity] = useState("");

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setCity(event.target.value);
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (city) {
      dispatch(addWeather(city));
    }
    event.preventDefault();
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First name
        <input type="text" value={city} onChange={handleChange} />
        </label>
        <input type="submit" value="Search" />
      </form>

      {loadingStatus === ApiStatus.LOADING && <div>Loading</div>}

      {loadingStatus === ApiStatus.FAILED && <div>Failed</div>}

      <WeathersContainer weathers={weathers} />
    </div>
  );
};
export default Home;
