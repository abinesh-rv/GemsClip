import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";
import App from "./App";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./styles/mui";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import CompanyList from "./components/company/CompanyList";
import router from "./router";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </React.StrictMode>
);
