import {
  Card,
  CardHeader,
  CardBody,
  Text,
  AbsoluteCenter,
  Input,
  InputGroup,
  InputLeftElement,
  Badge,
  HStack,
  Spinner,
  Menu,
  MenuItem,
  MenuButton,
  Button,
  MenuList,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import useGeographic from "../hooks/useGeographic";
import { useState } from "react";
import useWeather from "../hooks/useWeather";

const CardBox = () => {
  const [input, setInput] = useState<string | undefined>("");
  const { city, err, isLoading } = useGeographic(input);
  const { weather } = useWeather();

  const handleChange = (value: string) => {
    setInput(value);
  };

  if (err) return err;

  return (
    <>
      <AbsoluteCenter>
        <Card backgroundColor="teal.400" padding=" 14.4px">
          <CardHeader>
            <Menu>
              <MenuButton as={Button}>search your city</MenuButton>
              <MenuList>
                <InputGroup marginBottom={4}>
                  <InputLeftElement
                    pointerEvents="none"
                    borderRight="1px black dotted"
                  >
                    <CiSearch />
                  </InputLeftElement>
                  <Input
                    type="text"
                    borderRadius={20}
                    paddingStart={12}
                    value={input}
                    onChange={(e) => handleChange(e.target.value)}
                  />
                </InputGroup>
                <MenuItem textAlign="center" fontSize={20}>
                  {isLoading && input ? (
                    <Spinner color="red.500" />
                  ) : (
                    <ol>
                      {city?.map(
                        (c) =>
                          c.population && (
                            <li>
                              {c.name} {c.country} {c.population}
                            </li>
                          )
                      )}
                    </ol>
                  )}
                </MenuItem>
              </MenuList>
            </Menu>
          </CardHeader>
          <CardBody>
            <HStack justifyContent="space-between">
              <Text>temperature</Text>
              <Badge>{weather?.temperature_2m}</Badge>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>wind speed</Text>
              <Badge>{weather?.wind_speed_10m}</Badge>
            </HStack>
          </CardBody>
        </Card>
      </AbsoluteCenter>
    </>
  );
};

export default CardBox;
