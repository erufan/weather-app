import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import MenuCity from "./MenuCity";
import MeteorologyInfo from "./MeteorologyInfo";
import { useState } from "react";
import useGeographic from "../hooks/useGeographic";
import InputContext from "../context/InputContext";

const CardBox = () => {
  const [input, setInput] = useState<string | undefined>("");
  const { city, err, isLoading } = useGeographic(input);

  return (
    <>
      <InputContext.Provider value={{ input, setInput }}>
        <Card backgroundColor="teal.400" padding=" 14.4px">
          <CardHeader>
            <MenuCity city={city} err={err} isLoading={isLoading} />
          </CardHeader>
          <CardBody>
            <MeteorologyInfo />
          </CardBody>
        </Card>
      </InputContext.Provider>
    </>
  );
};

export default CardBox;
