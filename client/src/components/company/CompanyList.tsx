import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { Box } from "@mui/material";

function CompanyList() {
  const companyList = [
    "S.No",
    "Id",
    "Short",
    "Company Name",
    "City",
    "Services",
    "Status",
    "View",
  ];

  return (
    <Box>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {companyList.map((company) => (
                <TableCell>{company}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow></TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CompanyList;
