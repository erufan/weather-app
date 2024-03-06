import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface City {
  country: string;
  country_id: number;
  id: number;
  latitude: number;
  longitude: number;
  name: string;
  population: number;
}

interface Data {
  results: City[];
}

const useGeographic = () => {
  const [city, setCity] = useState<City[]>([]);
  const [err, setErr] = useState("");

  useEffect(() => {
    const controller = new AbortController();
    axios
      .get<Data>(`https://geocoding-api.open-meteo.com/v1/search?name=tehran`, {
        signal: controller.signal,
      })
      .then(({ data }) => setCity(data.results))
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
      });
    return () => controller.abort();
  }, []);
  return { city, err };
};

export default useGeographic;
