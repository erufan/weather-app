import { createContext } from "react";

interface InputContexts {
  input: string | undefined;
  setInput: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const InputContext = createContext<InputContexts>({
  input: "new york",
} as InputContexts);

export default InputContext;
