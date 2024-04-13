import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import CompanyList from "./components/company/CompanyList";
import CompanyDetails from "./components/company/CompanyDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "company",
        element: <CompanyList />,
      },
      {
        path: "company/:id",
        element: <CompanyDetails />,
      },
    ],
  },
]);

export default router;
