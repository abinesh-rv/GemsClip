import React from "react";
import { UseFormRegister } from "react-hook-form";
import { EDataFieldType, TCompany, TGeneral } from "./types";
import {
  CompanyDetailsPeopleData,
  ContactListData,
  EpfoData,
  EsicData,
  FeeDetailsData,
  IfData,
  ShramSuvidhaData,
  companyDetailsData,
  companyGeneralData,
} from "./data";
import {
  Box,
  Grid,
  MenuItem,
  Select,
  SelectChangeEvent,
  Stack,
  TextField,
  Typography,
  Button,
} from "@mui/material";

function CompanyForm({
  register,
  data,
  name,
  peopleData,
  inputData,
}: {
  register: UseFormRegister<TCompany>;
  data:
    | typeof companyGeneralData
    | typeof companyDetailsData
    | typeof ContactListData
    | typeof FeeDetailsData
    | typeof EsicData
    | typeof EpfoData
    | typeof ShramSuvidhaData
    | typeof IfData;
  name: string;
  peopleData?: typeof CompanyDetailsPeopleData;
  inputData?: TGeneral;
}) {
  return (
    <Stack spacing={2}>
      <Grid container>
        {data.map((value, index) => {
          return (
            <Grid item xs={6} key={index}>
              <Stack spacing={1} sx={{ m: 2 }}>
                <Typography>{value.name}</Typography>
                {value.type == EDataFieldType.Number && (
                  <TextField variant="outlined" type="number" fullWidth />
                )}
                {value.type == EDataFieldType.String && (
                  <TextField variant="outlined" type="text" fullWidth />
                )}
                {value.type == EDataFieldType.Dropdown && (
                  <Select
                    fullWidth
                    multiple={
                      (value as { dropDownType: string }).dropDownType ==
                      "multiple"
                        ? true
                        : false
                    }
                    value={[]}
                  >
                    {(value as { data: string[] }).data.map(
                      (value: string, index: number) => (
                        <MenuItem key={index}>{value}</MenuItem>
                      )
                    )}
                  </Select>
                )}
                {value.type == EDataFieldType.Phone && (
                  <TextField variant="outlined" type="tel" fullWidth />
                )}
                {value.type == EDataFieldType.Email && (
                  <TextField variant="outlined" type="email" fullWidth />
                )}
                {value.type == EDataFieldType.Date && (
                  <TextField variant="outlined" type="date" fullWidth />
                )}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
      {name == "Company Details" && (
        <>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Typography>People List</Typography>
            <Button>Add</Button>
          </Stack>

          <Grid container>
            {peopleData != undefined &&
              peopleData.map((value, index) => {
                return (
                  <Grid item xs={6} key={index}>
                    <Stack spacing={1} sx={{ m: 2 }}>
                      <Typography>{value.name}</Typography>

                      {value.type == EDataFieldType.Number && (
                        <TextField variant="outlined" type="number" fullWidth />
                      )}
                      {value.type == EDataFieldType.String && (
                        <TextField variant="outlined" type="text" fullWidth />
                      )}
                      {value.type == EDataFieldType.Phone && (
                        <TextField variant="outlined" type="tel" fullWidth />
                      )}
                      {value.type == EDataFieldType.Email && (
                        <TextField variant="outlined" type="email" fullWidth />
                      )}
                      {value.type == EDataFieldType.Date && (
                        <TextField variant="outlined" type="date" fullWidth />
                      )}
                    </Stack>
                  </Grid>
                );
              })}
          </Grid>
        </>
      )}
    </Stack>
  );
}

export default CompanyForm;
