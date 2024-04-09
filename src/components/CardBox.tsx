import { Card, CardHeader, CardBody, HStack } from "@chakra-ui/react";
import MeteorologyInfo from "./MeteorologyInfo";
import { useState } from "react";
import InputContext from "../context/InputContext";
import LocationContext from "../context/LocationContext";
import Location from "../interfaces/Location";
import Top from "./aboutCity/Top";

const CardBox = ({ type }: { type: "main" | "minor" }) => {
  const [input, setInput] = useState<string | undefined>("");
  const [location, setLocation] = useState<Location>({
    city: "Tehran",
    latitude: 35.6875,
    longitude: 51.4375,
    country: "Iran",
    country_code: "IR",
  });

  return (
    <>
      <InputContext.Provider value={{ input, setInput }}>
        <LocationContext.Provider value={{ location, setLocation }}>
          <Card backgroundColor="teal.400" padding=" 14.4px" width="400px">
            {type === "main" && (
              <CardHeader>
                <Top />
              </CardHeader>
            )}
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
