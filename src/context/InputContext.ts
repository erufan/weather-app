import { createContext } from "react";

interface InputContexts {
  input: string;
  setInput: React.Dispatch<React.SetStateAction<string>>;
}

const InputContext = createContext<InputContexts>({
  input: "",
} as InputContexts);

export default InputContext;
