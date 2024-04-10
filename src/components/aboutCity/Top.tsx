import { VStack } from "@chakra-ui/react";
import CityInfo from "./CityInfo";
import MenuCity from "./MenuCity";
import useGeographic from "../../hooks/useGeographic";

const Top = () => {
  const { city, err, isLoading } = useGeographic();

  return (
    <VStack flex="1" alignItems="stretch">
      <MenuCity city={city} err={err} isLoading={isLoading} />
      <CityInfo />
    </VStack>
  );
};

export default Top;
