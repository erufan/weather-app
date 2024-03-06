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
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
import useGeographic from "../hooks/useGeographic";

const CardBox = () => {
  const { city, err } = useGeographic();

  if (err) return err;
  return (
    <>
      <AbsoluteCenter>
        <Card backgroundColor="teal.400" padding=" 14.4px">
          <CardHeader>
            <InputGroup marginBottom={4}>
              <InputLeftElement
                pointerEvents="none"
                borderRight="1px black dotted"
              >
                <CiSearch />
              </InputLeftElement>
              <Input type="text" borderRadius={20} paddingStart={12} />
            </InputGroup>
            <Text textAlign="center" fontSize={20}>
              Rome
            </Text>
          </CardHeader>
          <CardBody>
            <HStack justifyContent="space-between">
              <Text>temperature</Text>
              <Badge>23</Badge>
            </HStack>
            <HStack justifyContent="space-between">
              <Text>wind speed</Text>
              <Badge>26</Badge>
            </HStack>
          </CardBody>
        </Card>
      </AbsoluteCenter>
    </>
  );
};

export default CardBox;
