import { Box, Stack, Typography } from "@mui/material";
import React from "react";

function NavBar() {
  return (
    <Box
      sx={{
        p: 2,
        borderBottom: 1,
        borderBottomWidth: "0.5px",
        borderBottomColor: "primary.main",
        height: "7vh",
      }}
    >
      <Stack direction={"row"} gap={2} alignItems={"baseline"}>
        <Typography
          variant="h4"
          color={"primary"}
          sx={{ letterSpacing: "2px" }}
        >
          Gems Clip
        </Typography>
        <Typography
          variant="h6"
          color={"primary"}
          sx={{ letterSpacing: "2px" }}
        >
          Audit Service
        </Typography>
      </Stack>
    </Box>
  );
}

export default NavBar;
