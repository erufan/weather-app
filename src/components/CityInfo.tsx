import { Wrap, WrapItem, Avatar, Heading, Box, Text } from "@chakra-ui/react";
import { useContext } from "react";
import LocationContext from "../context/LocationContext";

const CityInfo = () => {
  const { location } = useContext(LocationContext);

  return (
    <>
      <Wrap marginTop={4} align="flex-end">
        <WrapItem>
          <Avatar
            src={`https://flagsapi.com/${location.country_code}/shiny/64.png`}
            borderRadius={0}
          />
        </WrapItem>
        <WrapItem>
          <Box fontSize="sm">
            <Heading lineHeight={0.5}>{location.city}</Heading>
            <Text as="sub">{location.country}</Text>
          </Box>
        </WrapItem>
      </Wrap>
    </>
  );
};

export default CityInfo;
