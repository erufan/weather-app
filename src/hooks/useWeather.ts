import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import Current from "../interfaces/Current";
import weatherService from "../services/weatherService";
import Location from "../interfaces/Location";

interface Data {
  current: Current;
}

const useWeather = (location: Location) => {
  const [weather, setWeather] = useState<Current>();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const { request, cancel } = weatherService(
      location.latitude,
      location.longitude
    ).getData<Data>();

    setLoading(true);
    request
      .then(({ data }) => {
        setLoading(false);
        setWeather(data.current);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setLoading(false);
      });

    return () => cancel();
  }, [location]);
  return { weather, err, loading };
};

export default useWeather;
