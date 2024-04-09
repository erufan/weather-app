import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import MeteorologyInfo from "./MeteorologyInfo";
import Top from "./aboutCity/Top";

const CardBox = ({ type }: { type: "main" | "minor" }) => {
  return (
    <>
      <Card backgroundColor="teal.400" padding=" 14.4px" width="400px">
        {type === "main" && (
          <CardHeader>
            <Top />
          </CardHeader>
        )}
        <CardBody>
          <MeteorologyInfo />
        </CardBody>
      </Card>
    </>
  );
};

export default CardBox;
