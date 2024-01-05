import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import StateProvider from "./components/StateProvider.jsx";

const GlobalStyle = createGlobalStyle`

html,body{
  font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
  font-size: 62.5%;
  background-color: ${({ theme }) => theme.colors.bg};
}
`;

const theme = {
  colors: {
    primary: "#b85600",
    secondary: "#08002b",
    bg: "#220045",
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <StateProvider>
      <ThemeProvider theme={theme}>
        <GlobalStyle></GlobalStyle>
        <App></App>
      </ThemeProvider>
    </StateProvider>
  </React.StrictMode>
);
