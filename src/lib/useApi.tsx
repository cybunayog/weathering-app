import axios, { AxiosResponse, Method } from "axios";
import { useState, useEffect } from "react";

import { OpenWeatherMapResponse } from "./types";

// TODO: Add types for all data responses
export function useApi(url: string, method: Method) {
  const [data, setData] = useState<OpenWeatherMapResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response: AxiosResponse = await axios({ url, method });
        setData(response.data);
      } catch (error) {
        const errorMessage = error.message;
        setError(errorMessage);
      }

      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, error };
}

export function useOpenWeatherApi(
  path: string,
  lat: number,
  long: number,
  isImperial: boolean = true,
  method: Method,
) {
  return useApi(
    `${process.env.EXPO_PUBLIC_OPEN_WEATHER_URL}/${path}lat=${lat}&lon=${long}&units=${isImperial ? "imperial" : "metric"}&appid=${process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY}`,
    method,
  );
}
