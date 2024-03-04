import { Method } from "axios";

import { useOpenWeatherApi } from "./useApi";

export default function getForecast(
  lat: number,
  long: number,
  isImperial: boolean = true,
  method: Method = "GET",
) {
  const {
    data: forecastData,
    isLoading: loadingforecastData,
    error: forecastError,
  } = useOpenWeatherApi("forecast", lat, long, isImperial, method);

  return { forecastData, loadingforecastData, forecastError };
}
