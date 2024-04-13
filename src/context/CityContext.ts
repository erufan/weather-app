import { createContext } from "react";
import City from "../interfaces/City";

interface cityContexts {
  city: City[] | undefined;
  err: string;
  isLoading: boolean;
}

const CityContext = createContext<cityContexts>({} as cityContexts);

export default CityContext;
