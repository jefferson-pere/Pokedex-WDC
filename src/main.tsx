import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "styled-components";
import { appTheme } from "./styles/theme";
import { GlobalStyles } from "./styles/global";
import { AppRoutes } from "./routes";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={appTheme}>
      <AppRoutes />
      <GlobalStyles />
    </ThemeProvider>
  </StrictMode>
);
