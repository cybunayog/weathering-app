import { Method } from "axios";

import { CoordsObject } from "./types";
import { useOpenWeatherApi } from "./useApi";

export default function getCurrentWeather(
  coords: CoordsObject,
  isImperial: boolean = true,
  method: Method = "GET",
  zipcode?: string,
) {
  const {
    data: currentWeatherData,
    isLoading: loadingCurrentWeatherData,
    error: currentWeatherError,
  } = useOpenWeatherApi("weather", coords, isImperial, method, zipcode);

  return { currentWeatherData, loadingCurrentWeatherData, currentWeatherError };
}
