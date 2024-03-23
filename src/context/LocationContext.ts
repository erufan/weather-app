import { createContext } from "react";
import Location from "../interfaces/Location";

interface LocationContexts {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

const LocationContext = createContext<LocationContexts>({} as LocationContexts);

export default LocationContext;
