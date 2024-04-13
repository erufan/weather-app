import { createContext } from "react";
import Location from "../interfaces/Location";

interface LocationContexts {
  location: Location;
  setLocation: React.Dispatch<React.SetStateAction<Location>>;
}

const LocationContext = createContext<LocationContexts>({
  location: {
    city: "Tehran",
    latitude: 35.6875,
    longitude: 51.4375,
    country: "Iran",
    country_code: "IR",
  },
} as LocationContexts);

export default LocationContext;
