import { Box, HStack } from "@chakra-ui/react";
import CardBox from "./components/CardBox";
import InputContext from "./context/InputContext";
import LocationContext from "./context/LocationContext";
import Location from "./interfaces/Location";
import { useState } from "react";
import CityContext from "./context/CityContext";
import useGeographic from "./hooks/useGeographic";
import useWeather from "./hooks/useWeather";
import WeatherContext from "./context/WeatherContext";

function App() {
  const [input, setInput] = useState<string>("");
  const [location, setLocation] = useState<Location>({
    city: "Tehran",
    latitude: 35.6875,
    longitude: 51.4375,
    country: "Iran",
    country_code: "IR",
  });
  const { city, err, isLoading } = useGeographic(input);
  const { weather, loading } = useWeather(location);

  return (
    <InputContext.Provider value={{ input, setInput }}>
      <LocationContext.Provider value={{ location, setLocation }}>
        <CityContext.Provider value={{ city, err, isLoading }}>
          <WeatherContext.Provider value={{ weather, loading }}>
            <Box backgroundColor="teal.700" height="100vh">
              <HStack justifyContent="center">
                <CardBox type="main" />
              </HStack>
              <HStack justifyContent="center" marginTop="2rem" gap={5}>
                <CardBox type="minor" index={0} />
                <CardBox type="minor" index={1} />
                <CardBox type="minor" index={2} />
              </HStack>
            </Box>
          </WeatherContext.Provider>
        </CityContext.Provider>
      </LocationContext.Provider>
    </InputContext.Provider>
  );
}

export default App;
