import { Method } from "axios";

import { useOpenWeatherApi } from "./useApi";

export default function getCurrentWeather(
  lat: number,
  long: number,
  isImperial: boolean = true,
  method: Method = "GET",
) {
  const {
    data: currentWeatherData,
    isLoading: loadingCurrentWeatherData,
    error: currentWeatherError,
  } = useOpenWeatherApi("weather", lat, long, isImperial, method);

  return { currentWeatherData, loadingCurrentWeatherData, currentWeatherError };
}
