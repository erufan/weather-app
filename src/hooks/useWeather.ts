import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import Current from "../interfaces/Current";
import weatherService from "../services/weatherService";
import Location from "../interfaces/Location";
import Daily from "../interfaces/Daily";

interface Data {
  current: Current;
  Daily: Daily;
}

const useWeather = (location: Location) => {
  const [weather, setWeather] = useState<Data>();
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
        setWeather(data);
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
