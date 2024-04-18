import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import weatherService from "../services/weatherService";
import Location from "../interfaces/Location";
import DataWeather from "../interfaces/DataWeather";

const useWeather = (location: Location) => {
  const [weather, setWeather] = useState<DataWeather>();
  const [err, setErr] = useState("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const { request, cancel } = weatherService(
      location.latitude,
      location.longitude
    ).getData<DataWeather>();

    setLoading(true);
    request
      .then(({ data }) => {
        setLoading(false);
        setWeather(data);
        console.log(data);
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
