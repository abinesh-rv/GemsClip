import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button, Stack, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { TCompanyBasicInfo } from "./types";
import { useNavigate } from "react-router-dom";

function CompanyList() {
  const navigate = useNavigate();
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

  const fetchCompanyListData = async () => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/company/`);
    let { data } = await res.json();
    data = JSON.parse(data);
    return data;
  };

  const { isSuccess, data } = useQuery({
    queryKey: ["company"],
    queryFn: fetchCompanyListData,
  });

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h4">Company List</Typography>
        <Button onClick={() => navigate("0")}>Create</Button>
      </Stack>
      <TableContainer>
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {companyList.map((company, index) => (
                <TableCell key={index}>{company}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {isSuccess &&
              data.map((company: TCompanyBasicInfo, index: number) => {
                company.General.Services = company.General.Services.toString();
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    <TableCell>{company.General.CompanyId}</TableCell>
                    <TableCell>{company.General.CompanyShort}</TableCell>
                    <TableCell>{company.General.CompanyName}</TableCell>
                    <TableCell>{company.General.City}</TableCell>
                    <TableCell>{company.General.Services}</TableCell>
                    <TableCell>{company.General.Status}</TableCell>
                    <TableCell>
                      <Button onClick={() => navigate(`${company.Id}`)}>
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Stack>
  );
}

export default CompanyList;
