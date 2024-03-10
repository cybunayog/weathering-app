import { Method } from "axios";

import { CoordsObject, OpenWeatherMapForecastResponse } from "./types";
import { useOpenWeatherApi } from "./useApi";

export default function getForecast(
  coords: CoordsObject,
  isImperial: boolean = true,
  method: Method = "GET",
  zipcode?: string,
) {
  const {
    data,
    isLoading: loadingForecastData,
    error: forecastError,
    callApi: callForecast,
  } = useOpenWeatherApi("forecast", coords, isImperial, method, zipcode, 5);

  const forecastData = data as OpenWeatherMapForecastResponse;

  return { callForecast, forecastData, loadingForecastData, forecastError };
}
