import useApi from "./useApi";

export default function getCurrentWeather(
  lat: number,
  long: number,
  isImperial: boolean = true,
) {
  return useApi(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&units=${isImperial ? "imperial" : "metric"}&appid=${process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY}`,
    "GET",
  );
}
