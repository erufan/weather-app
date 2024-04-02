import { Avatar, Heading, Box, Text, HStack } from "@chakra-ui/react";
import { useContext } from "react";
import LocationContext from "../../context/LocationContext";

const CityInfo = () => {
  const { location } = useContext(LocationContext);

  return (
    <>
      <HStack flexWrap="nowrap">
        <Box>
          <Avatar
            src={`https://flagsapi.com/${location.country_code}/shiny/64.png`}
            borderRadius={0}
          />
        </Box>
        <Box>
          <Heading fontSize={24}>{location.city}</Heading>
          <Text as="sub">{location.country}</Text>
        </Box>
      </HStack>
    </>
  );
};

export default CityInfo;
