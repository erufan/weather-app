import { Box, Stack } from "@chakra-ui/react";
import CardBox from "./components/CardBox";
import InputContext from "./context/InputContext";
import LocationContext from "./context/LocationContext";
import Location from "./interfaces/Location";
import { useState } from "react";
import CityContext from "./context/CityContext";
import useGeographic from "./hooks/useGeographic";
import useWeather from "./hooks/useWeather";
import WeatherContext from "./context/WeatherContext";
import Loading from "./components/loading/Loading";

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

  if (loading) return <Loading />;

  return (
    <InputContext.Provider value={{ input, setInput }}>
      <LocationContext.Provider value={{ location, setLocation }}>
        <CityContext.Provider value={{ city, err, isLoading }}>
          <WeatherContext.Provider value={{ weather, loading }}>
            <Box>
              <Stack alignItems="center">
                <CardBox type="main" />
              </Stack>
              <Stack
                alignItems="center"
                justifyContent="center"
                marginTop="2rem"
                gap={5}
                direction={{ base: "column", xl: "row" }}
              >
                <CardBox type="minor" index={0} />
                <CardBox type="minor" index={1} />
                <CardBox type="minor" index={2} />
              </Stack>
            </Box>
          </WeatherContext.Provider>
        </CityContext.Provider>
      </LocationContext.Provider>
    </InputContext.Provider>
  );
}

export default App;
