import { AbsoluteCenter, Box } from "@chakra-ui/react";
import CardBox from "./components/CardBox";

function App() {
  return (
    <Box height="100vh" backgroundColor="teal.700">
      <AbsoluteCenter width="400px">
        <CardBox />
      </AbsoluteCenter>
    </Box>
  );
}

export default App;
