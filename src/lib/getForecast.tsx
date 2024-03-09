import { Method } from "axios";

import { CoordsObject } from "./types";
import { useOpenWeatherApi } from "./useApi";

export default function getForecast(
  coords: CoordsObject,
  isImperial: boolean = true,
  method: Method = "GET",
  zipcode?: string,
) {
  const {
    data: forecastData,
    isLoading: loadingforecastData,
    error: forecastError,
  } = useOpenWeatherApi("forecast", coords, isImperial, method, zipcode);

  return { forecastData, loadingforecastData, forecastError };
}
