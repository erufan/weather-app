import {
  Button,
  ListItem,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  OrderedList,
  Spinner,
} from "@chakra-ui/react";
import SearchCity from "./SearchCity";
import { useState } from "react";
import useGeographic from "../hooks/useGeographic";

const MenuCity = () => {
  const [input, setInput] = useState<string | undefined>("");
  const { city, err, isLoading } = useGeographic(input);

  if (err) return err;

  return (
    <Menu>
      <MenuButton as={Button}>search your city</MenuButton>
      <MenuList>
        <SearchCity input={input} onChange={(e) => setInput(e)} />
        <MenuItem textAlign="center" fontSize={20}>
          {isLoading && input ? (
            <Spinner color="red.500" />
          ) : (
            <OrderedList>
              {city?.map(
                (c) =>
                  c.population && (
                    <ListItem key={c.id}>
                      {c.name} {c.country} {c.population}
                    </ListItem>
                  )
              )}
            </OrderedList>
          )}
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default MenuCity;
