import { VStack } from "@chakra-ui/react";
import CityInfo from "./CityInfo";
import MenuCity from "./MenuCity";

const Top = () => {
  return (
    <VStack flex="1" alignItems="stretch">
      <MenuCity />
      <CityInfo />
    </VStack>
  );
};

export default Top;
