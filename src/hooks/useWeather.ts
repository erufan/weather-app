import { CanceledError } from "axios";
import { useContext, useEffect, useState } from "react";
import LocationContext from "../context/LocationContext";
import apiClientMeto from "../services/apiClientMeto";
import Current from "../interfaces/Current";

interface Data {
  current: Current;
}

const useWeather = () => {
  const [weather, setWeather] = useState<Current>();
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { location } = useContext(LocationContext);
  const { latitude, longitude } = location;

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    apiClientMeto
      .get<Data>(
        `/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m,weather_code,precipitation_probability,relative_humidity_2m`,
        { signal: controller.signal }
      )
      .then(({ data }) => {
        setIsLoading(false);
        setWeather(data.current);
        console.log(data);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

    return () => controller.abort();
  }, [location]);
  return { weather, err, isLoading };
};

export default useWeather;
