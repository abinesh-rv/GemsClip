import { Container } from "@mui/material";
import MainLayout from "./layout/MainLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <MainLayout>
      <Container maxWidth="xl">
        <Outlet />
      </Container>
    </MainLayout>
  );
}

export default App;
