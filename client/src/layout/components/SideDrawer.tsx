import {
  Box,
  List,
  ListItemButton,
  ListItemText,
  Collapse,
  Divider,
} from "@mui/material";
import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

import React, { useState } from "react";

function SideDrawer() {
  const navigate = useNavigate();
  const [companyOpen, setCompanyOpen] = useState<boolean>(false);
  const [employeeOpen, setEmployeeOpen] = useState<boolean>(false);
  return (
    <Box
      sx={{
        p: 2,
        height: "93vh",
        borderRight: 1,
        borderRightWidth: "0.5px",
        borderRightColor: "primary.main",
      }}
    >
      <List>
        <ListItemButton onClick={() => setCompanyOpen(!companyOpen)}>
          <ListItemText>Company</ListItemText>
          {companyOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={companyOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => navigate("/company")}>
              <ListItemText>Companies List</ListItemText>
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItemButton onClick={() => setEmployeeOpen(!employeeOpen)}>
          <ListItemText>Employee</ListItemText>
          {employeeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Divider />
      </List>
    </Box>
  );
}

export default SideDrawer;
