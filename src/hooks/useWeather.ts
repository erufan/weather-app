import { CanceledError } from "axios";
import { useContext, useEffect, useState } from "react";
import LocationContext from "../context/LocationContext";
import Current from "../interfaces/Current";
import weatherService from "../services/weatherService";

interface Data {
  current: Current;
}

const useWeather = () => {
  const [weather, setWeather] = useState<Current>();
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const { location } = useContext(LocationContext);

  useEffect(() => {
    const { request, cancel } = weatherService(
      location.latitude,
      location.longitude
    ).getData<Data>();

    setIsLoading(true);
    request
      .then(({ data }) => {
        setIsLoading(false);
        setWeather(data.current);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, [location]);
  return { weather, err, isLoading };
};

export default useWeather;
