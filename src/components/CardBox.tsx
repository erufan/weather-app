import {
  Card,
  CardHeader,
  CardBody,
  Text,
  Button,
  AbsoluteCenter,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";
const CardBox = () => {
  return (
    <>
      <AbsoluteCenter>
        <Card>
          <CardHeader>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                borderRight="1px black dotted"
              >
                <CiSearch />
              </InputLeftElement>
              <Input type="text" borderRadius={20} />
            </InputGroup>
            <Text>Rome</Text>
          </CardHeader>
          <CardBody>
            <Text>temperature</Text>
            <Text>wind speed</Text>
            <Button>click me</Button>
          </CardBody>
        </Card>
      </AbsoluteCenter>
    </>
  );
};

export default CardBox;
