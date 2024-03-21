import { InputGroup, InputLeftElement, Input } from "@chakra-ui/react";
import { CiSearch } from "react-icons/ci";

interface Props {
  input: string | undefined;
  onChange: (input: string) => void;
}

const SearchCity = ({ input, onChange }: Props) => {
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
        onChange={(i) => onChange(i.target.value)}
      />
    </InputGroup>
  );
};

export default SearchCity;
