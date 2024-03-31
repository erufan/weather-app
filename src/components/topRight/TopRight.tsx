import { VStack, Image, Text } from "@chakra-ui/react";
import logo from "../../assets/weatherIcons/0.png";

const TopRight = () => {
  return (
    <VStack gap="16px">
      <Image src={logo} boxSize="100px" />
      <Text>clear</Text>
    </VStack>
  );
};

export default TopRight;
