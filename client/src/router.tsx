import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CompanyList from "./components/company/CompanyList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "company",
        element: <CompanyList />,
      },
    ],
  },
]);

export default router;
