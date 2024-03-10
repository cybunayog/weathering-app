import axios, { AxiosResponse, Method } from "axios";
import { useState, useCallback } from "react";

import {
  CoordsObject,
  OpenWeatherMapWeatherResponse,
  OpenWeatherMapForecastResponse,
} from "./types";

// TODO: Add types for all data responses
export function useApi(url: string, method: Method) {
  const [data, setData] = useState<
    OpenWeatherMapWeatherResponse | OpenWeatherMapForecastResponse | null
  >(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  const callApi = useCallback(async () => {
    setIsLoading(true);
    try {
      const response: AxiosResponse = await axios({ url, method });
      setData(response.data);
    } catch (error) {
      // TODO: figure out error object
      const errorMessage = error.message;
      setError(errorMessage);
    }

    setIsLoading(false);
  }, []);

  return { data, isLoading, error, callApi };
}

export function useOpenWeatherApi(
  path: string,
  coords: CoordsObject,
  isImperial: boolean = true,
  method: Method,
  zipcode?: string,
  count?: number,
) {
  let suffix: string;
  if (zipcode) {
    suffix = `zip=${zipcode}`;
  } else {
    suffix = `lat=${coords.lat}&lon=${coords.long}`;
  }
  return useApi(
    count
      ? `${process.env.EXPO_PUBLIC_OPEN_WEATHER_URL}/${path}?${suffix}&units=${isImperial ? "imperial" : "metric"}&cnt=${count}&appid=${process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY}`
      : `${process.env.EXPO_PUBLIC_OPEN_WEATHER_URL}/${path}?${suffix}&units=${isImperial ? "imperial" : "metric"}&appid=${process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY}`,
    method,
  );
}
