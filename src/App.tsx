import { Box, HStack } from "@chakra-ui/react";
import CardBox from "./components/CardBox";
import InputContext from "./context/InputContext";
import LocationContext from "./context/LocationContext";
import Location from "./interfaces/Location";
import { useState } from "react";

function App() {
  const [input, setInput] = useState<string | undefined>("");
  const [location, setLocation] = useState<Location>({
    city: "Tehran",
    latitude: 35.6875,
    longitude: 51.4375,
    country: "Iran",
    country_code: "IR",
  });

  return (
    <InputContext.Provider value={{ input, setInput }}>
      <LocationContext.Provider value={{ location, setLocation }}>
        <Box backgroundColor="teal.700" height="100vh">
          <HStack justifyContent="center">
            <CardBox type="main" />
          </HStack>
          <HStack justifyContent="center" marginTop="2rem" gap={5}>
            <CardBox type="minor" />
            <CardBox type="minor" />
            <CardBox type="minor" />
          </HStack>
        </Box>
      </LocationContext.Provider>
    </InputContext.Provider>
  );
}

export default App;
