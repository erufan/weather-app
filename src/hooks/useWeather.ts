import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";

interface Current {
  temperature_2m: number;
  wind_speed_10m: number;
}

interface Data {
  current: Current;
}

const useWeather = () => {
  const [weather, setWeather] = useState<Current>();
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<Data>(
        `https://api.open-meteo.com/v1/forecast?latitude=-32.8337&longitude=-70.5983&current=temperature_2m,wind_speed_10m`,
        { signal: controller.signal }
      )
      .then(({ data }) => {
        setIsLoading(false);
        setWeather(data.current);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, []);
  return { weather, err, isLoading };
};

export default useWeather;
