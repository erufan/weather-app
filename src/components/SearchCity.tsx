import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import InputContext from "../context/InputContext";

const SearchCity = () => {
  const { input, setInput } = useContext(InputContext);

  return (
    <InputGroup marginBottom={4}>
      <InputLeftElement pointerEvents="none" borderRight="1px black dotted">
        <CiSearch />
      </InputLeftElement>
      <Input
        type="text"
        borderRadius={20}
        paddingStart={12}
        value={input}
        onChange={(i) => setInput(i.target.value)}
      />
    </InputGroup>
  );
};

export default SearchCity;
