import { Button, Grid, Slide, Stack } from "@mui/material";
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
      <Grid container>
        <Slide in={drawerToggle} direction="right" mountOnEnter unmountOnExit>
          <Grid item xs={2}>
            <SideDrawer />
          </Grid>
        </Slide>
        <Grid item flexGrow={1}>
          <Stack
            direction={"row"}
            alignItems={"center"}
            sx={{
              borderBottom: 1,
              borderBottomWidth: "0.5px",
              borderBottomColor: "primary.main",
            }}
          >
            <Button
              sx={{ mr: 2, borderRadius: 0 }}
              variant="contained"
              onClick={() => setDrawerToggle(!drawerToggle)}
            >
              {drawerToggle ? <ArrowBackIcon /> : <ArrowForwardIcon />}
            </Button>
            <WindowTabs />
          </Stack>
          <Stack sx={{ p: 2 }}>{children}</Stack>
        </Grid>
      </Grid>
    </>
  );
}

export default MainLayout;
