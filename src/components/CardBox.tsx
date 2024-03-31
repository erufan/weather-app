import {
  Card,
  CardHeader,
  CardBody,
  HStack,
  Text,
  Image,
  VStack,
} from "@chakra-ui/react";
import MenuCity from "./MenuCity";
import MeteorologyInfo from "./MeteorologyInfo";
import { useState } from "react";
import useGeographic from "../hooks/useGeographic";
import InputContext from "../context/InputContext";
import LocationContext from "../context/LocationContext";
import Location from "../interfaces/Location";
import CityInfo from "./CityInfo";
import logo from "../assets/weatherIcons/0.png";

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
              <HStack spacing="16px">
                <VStack>
                  <MenuCity city={city} err={err} isLoading={isLoading} />
                  <CityInfo />
                </VStack>
                <VStack gap="16px">
                  <Image src={logo} boxSize="100px" />
                  <Text>clear</Text>
                </VStack>
              </HStack>
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
