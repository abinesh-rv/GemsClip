import { Box, Button, Container, Grid, Slide, Stack } from "@mui/material";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import WindowTabs from "./components/WindowTabs";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Children, useState } from "react";

function MainLayout({ children }: { children: React.ReactNode }) {
  const [drawerToggle, setDrawerToggle] = useState<boolean>(true);
  return (
    <>
      <NavBar />
      <Slide in={drawerToggle} direction="right" mountOnEnter>
        <Stack
          sx={{
            display: drawerToggle ? "flex" : "none",
            height: "91vh",
            width: "15%",
            position: "fixed",
            margin: "10px",
            marginTop: "8vh",
            borderRadius: "10px",
            backgroundColor: "primary.main",
          }}
        >
          <SideDrawer />
        </Stack>
      </Slide>
      <Stack
        sx={{
          paddingTop: "7vh",
          paddingLeft: drawerToggle ? "16%" : "0%",
        }}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          sx={{
            position: "fixed",
            width: "100%",
            backgroundColor: "background.default",
            zIndex: 1100,
            p: 1,
          }}
        >
          <Button
            sx={{ mr: 2, borderRadius: "10px" }}
            variant="contained"
            onClick={() => setDrawerToggle(!drawerToggle)}
          >
            {drawerToggle ? <ArrowBackIcon /> : <ArrowForwardIcon />}
          </Button>
          <WindowTabs />
        </Stack>
        <Stack sx={{ pr: "2rem", pb: "rem", mt: "4rem" }}>{children}</Stack>
      </Stack>
    </>
  );
}

export default MainLayout;
