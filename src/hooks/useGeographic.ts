import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import City from "../interfaces/City";
import cityService, { Data } from "../services/cityService";

const useGeographic = (input: string | undefined) => {
  const [city, setCity] = useState<City[] | undefined>([]);
  const [err, setErr] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const { request, cancel } = cityService(input).getData<Data>();

    setIsLoading(true);
    request
      .then(({ data }) => {
        setIsLoading(false);
        setCity(data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setErr(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, [input]);
  return { city, err, isLoading };
};

export default useGeographic;
