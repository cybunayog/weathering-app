import axios, { AxiosResponse, Method } from "axios";
import { useState, useEffect } from "react";

import { OpenWeatherMapResponse } from "./types";

export default function useApi(url: string, method: Method) {
  // TODO: Add types for all data responses
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
