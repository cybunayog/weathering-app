import axios, { AxiosResponse, Method } from "axios";
import { useState, useEffect } from "react";

import { CoordsObject, OpenWeatherMapResponse } from "./types";

// TODO: Add types for all data responses
export function useApi(url: string, method: Method) {
  const [data, setData] = useState<OpenWeatherMapResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<{ message: string } | null>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      console.log(url);

      try {
        const response: AxiosResponse = await axios({ url, method });
        setData(response.data);
      } catch (error) {
        // TODO: figure out error object
        console.log(error);
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
  coords: CoordsObject,
  isImperial: boolean = true,
  method: Method,
  zipcode?: string,
) {
  let suffix = "";
  if (zipcode) {
    suffix = `zip=${zipcode}`;
  } else {
    suffix = `lat=${coords.lat}&lon=${coords.long}`;
  }
  return useApi(
    `${process.env.EXPO_PUBLIC_OPEN_WEATHER_URL}/${path}?${suffix}&units=${isImperial ? "imperial" : "metric"}&appid=${process.env.EXPO_PUBLIC_OPEN_WEATHER_KEY}`,
    method,
  );
}
