import {
  Button,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  OrderedList,
  Spinner,
  VStack,
} from "@chakra-ui/react";
import SearchCity from "./SearchCity";
import City from "../interfaces/City";
import { useContext } from "react";
import InputContext from "../context/InputContext";
import LocationContext from "../context/LocationContext";
import CityInfo from "./CityInfo";

interface Props {
  city: City[] | undefined;
  err: string;
  isLoading: boolean;
}

const MenuCity = ({ city, err, isLoading }: Props) => {
  if (err) return err;
  const { input } = useContext(InputContext);
  const { setLocation } = useContext(LocationContext);

  return (
    <VStack>
      <Menu>
        <MenuButton as={Button}>search your city</MenuButton>
        <MenuList>
          <SearchCity />
          <MenuItem textAlign="center" fontSize={20}>
            {isLoading && input ? (
              <Spinner color="red.500" />
            ) : (
              <OrderedList>
                {city?.map(
                  (c) =>
                    c.population && (
                      <ListItem
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
                      </ListItem>
                    )
                )}
              </OrderedList>
            )}
          </MenuItem>
        </MenuList>
      </Menu>
      <CityInfo />
    </VStack>
  );
};

export default MenuCity;
