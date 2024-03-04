import axios, { AxiosResponse, Method } from "axios";
import { useState, useEffect } from "react";

export default function useApi(url: string, method: Method) {
  const [data, setData] = useState<null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<unknown>(null);

  useEffect(() => {
    (async () => {
      setIsLoading(true);

      try {
        const response: AxiosResponse = await axios({ url, method });
        setData(response.data);
      } catch (error) {
        setError(error);
      }

      setIsLoading(false);
    })();
  }, []);

  return { data, isLoading, error };
}
