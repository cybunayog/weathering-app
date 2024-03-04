import axios, { AxiosResponse, Method } from "axios";
import { useState, useEffect } from "react";

import { OpenWeatherMapResponse } from "./types";

export default function useApi(url: string, method: Method) {
  // TODO: Add types for all data responses
  const [data, setData] = useState<OpenWeatherMapResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response: AxiosResponse = await axios({ url, method });
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, error };
}
