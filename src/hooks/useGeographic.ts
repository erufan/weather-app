import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import City from "../interfaces/City";

interface Data {
  results: City[] | undefined;
}

const useGeographic = (input: string | undefined) => {
  const [city, setCity] = useState<City[] | undefined>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<Data>(
        `https://geocoding-api.open-meteo.com/v1/search?name=${input}`,
        {
          signal: controller.signal,
        }
      )
      .then(({ data }) => {
        setIsLoading(false);
        setCity(data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [input]);
  return { city, err, isLoading };
};

export default useGeographic;