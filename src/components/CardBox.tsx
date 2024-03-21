import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import MenuCity from "./MenuCity";
import MeteorologyInfo from "./MeteorologyInfo";

const CardBox = () => {
  return (
    <>
      <Card backgroundColor="teal.400" padding=" 14.4px">
        <CardHeader>
          <MenuCity />
        </CardHeader>
        <CardBody>
          <MeteorologyInfo />
        </CardBody>
      </Card>
    </>
  );
};

export default CardBox;
