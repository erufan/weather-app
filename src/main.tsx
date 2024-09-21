import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider, extendTheme, LightMode } from "@chakra-ui/react";

const config = {
  styles: {
    global: () => ({
      body: {
        bg: "teal.700",
      },
    }),
  },
};

const theme = extendTheme(config);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <LightMode>
        <App />
      </LightMode>
    </ChakraProvider>
  </React.StrictMode>
);
