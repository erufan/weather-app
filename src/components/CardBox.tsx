import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import MenuCity from "./MenuCity";
import MeteorologyInfo from "./MeteorologyInfo";
import { useState } from "react";
import useGeographic from "../hooks/useGeographic";
import InputContext from "../context/InputContext";
import LocationContext from "../context/LocationContext";
import Location from "../interfaces/Location";

const CardBox = () => {
  const [input, setInput] = useState<string | undefined>("");
  const [location, setLocation] = useState<Location>({} as Location);
  const { city, err, isLoading } = useGeographic(input);

  return (
    <>
      <InputContext.Provider value={{ input, setInput }}>
        <LocationContext.Provider value={{ location, setLocation }}>
          <Card backgroundColor="teal.400" padding=" 14.4px">
            <CardHeader>
              <MenuCity city={city} err={err} isLoading={isLoading} />
            </CardHeader>
            <CardBody>
              <MeteorologyInfo />
            </CardBody>
          </Card>
        </LocationContext.Provider>
      </InputContext.Provider>
    </>
  );
};

export default CardBox;
