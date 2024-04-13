import { AppBar, Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <Box
      sx={{
        height: "7vh",
        position: "fixed",
        width: "100%",
        backgroundColor: "background.default",
        zIndex: 1100,
        p: 1,
      }}
    >
      <Box
        sx={{
          backgroundColor: "primary.main",
          p: 1,
          borderRadius: "10px",
        }}
      >
        <Stack direction={"row"} height={"100%"} gap={2} alignItems={"center"}>
          <Typography variant="h5" onClick={() => navigate("/")}>
            Gems Clip
          </Typography>
          <Typography variant="h6" sx={{ letterSpacing: "2px" }}>
            Audit Service
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default NavBar;
