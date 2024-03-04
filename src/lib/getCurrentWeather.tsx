import { Method } from "axios";

import useApi from "./useApi";

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
  } = useApi(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${isImperial ? "imperial" : "metric"}&appid=${process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY}`,
    method,
  );

  return { currentWeatherData, loadingCurrentWeatherData, currentWeatherError };
}
