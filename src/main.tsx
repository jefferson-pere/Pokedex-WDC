import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { App } from "./pages/App/index.tsx";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme.ts";
import { GlobalStyles } from "./styles/global.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <App />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
