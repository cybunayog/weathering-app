import { Method } from "axios";

import { CoordsObject, OpenWeatherMapWeatherResponse } from "./types";
import { useOpenWeatherApi } from "./useApi";

export default function getCurrentWeather(
  coords: CoordsObject,
  isImperial: boolean = true,
  method: Method = "GET",
  zipcode?: string,
) {
  const {
    data,
    isLoading: loadingCurrentWeatherData,
    error: currentWeatherError,
    callApi: callCurrentWeather,
  } = useOpenWeatherApi("weather", coords, isImperial, method, zipcode);

  const currentWeatherData = data as OpenWeatherMapWeatherResponse;

  return {
    callCurrentWeather,
    currentWeatherData,
    loadingCurrentWeatherData,
    currentWeatherError,
  };
}
