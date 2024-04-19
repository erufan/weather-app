import {
  Button,
  Menu,
  MenuButton,
  MenuList,
  Spinner,
  Box,
  Text,
  VStack,
} from "@chakra-ui/react";
import SearchCity from "./SearchCity";
import { useContext } from "react";
import InputContext from "../../context/InputContext";
import LocationContext from "../../context/LocationContext";
import CityContext from "../../context/CityContext";

const MenuCity = () => {
  const { city, err, isLoading } = useContext(CityContext);
  if (err) return err;
  const { input } = useContext(InputContext);
  const { setLocation } = useContext(LocationContext);

  return (
    <>
      <Menu lazyBehavior="unmount" isLazy={true} matchWidth={true}>
        <MenuButton as={Button}>search your city</MenuButton>
        <MenuList>
          <Box padding={4}>
            <SearchCity />
          </Box>
          {isLoading && input ? (
            <VStack>
              <Spinner
                textAlign="center"
                emptyColor="teal.100"
                color="teal.400"
                size="md"
              />
            </VStack>
          ) : (
            <>
              {city?.map(
                (c) =>
                  c.population && (
                    <Text
                      padding={2}
                      cursor="pointer"
                      _hover={{
                        background: "gray.100",
                      }}
                      key={c.id}
                      onClick={() =>
                        setLocation({
                          city: c.name,
                          country_code: c.country_code,
                          country: c.country,
                          longitude: c.longitude,
                          latitude: c.latitude,
                        })
                      }
                    >
                      {c.name} {c.country} {c.population}
                    </Text>
                  )
              )}
            </>
          )}
        </MenuList>
      </Menu>
    </>
  );
};

export default MenuCity;
