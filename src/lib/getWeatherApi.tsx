import useApi from "./useApi";

export function getWeatherApi(lat: number, long: number) {
  return useApi(
    `https://api.openweathermap.org/data/3.0/onecall?lat=#${lat}&lon=${long}&appid=${process.env.OPEN_WEATHER_KEY}`,
  );
}
