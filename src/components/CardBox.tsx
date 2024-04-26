import { Card, CardHeader, CardBody } from "@chakra-ui/react";
import MeteorologyInfo from "./MeteorologyInfo";
import Top from "./aboutCity/Top";

interface Props {
  type: "main" | "minor";
  index?: number;
}

const CardBox = ({ type, index }: Props) => {
  return (
    <>
      <Card
        backgroundColor="teal.400"
        padding=" 14.4px"
        width="400px"
        marginTop={1}
      >
        {type === "main" && (
          <CardHeader>
            <Top />
          </CardHeader>
        )}
        <CardBody>
          <MeteorologyInfo type={type} index={index} />
        </CardBody>
      </Card>
    </>
  );
};

export default CardBox;
