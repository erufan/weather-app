import { VStack } from "@chakra-ui/react";
import CityInfo from "./CityInfo";
import MenuCity from "./MenuCity";
import useGeographic from "../../hooks/useGeographic";
import { useContext } from "react";
import InputContext from "../../context/InputContext";

const Topleft = () => {
  const { input } = useContext(InputContext);
  const { city, err, isLoading } = useGeographic(input);

  return (
    <VStack flex="1" alignItems="stretch">
      <MenuCity city={city} err={err} isLoading={isLoading} />
      <CityInfo />
    </VStack>
  );
};

export default Topleft;
