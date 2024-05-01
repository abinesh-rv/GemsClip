import React, { useEffect } from "react";
import { Control, Controller, UseFormRegister } from "react-hook-form";
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
  editMode,
  data,
  name,
  control,
}: {
  register: UseFormRegister<any>;
  editMode: boolean;
  control: Control;
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
                  <TextField
                    variant="outlined"
                    InputProps={{ readOnly: !editMode }}
                    {...register(
                      `Company.${name.replaceAll(
                        " ",
                        ""
                      )}.${value.name.replaceAll(" ", "")}`
                    )}
                    type="number"
                    fullWidth
                  />
                )}
                {value.type == EDataFieldType.String && (
                  <TextField
                    variant="outlined"
                    InputProps={{ readOnly: !editMode }}
                    type="text"
                    {...register(
                      `Company.${name.replaceAll(
                        " ",
                        ""
                      )}.${value.name.replaceAll(" ", "")}`
                    )}
                    fullWidth
                  />
                )}

                {value.type == EDataFieldType.Dropdown && (
                  <Controller
                    name={`Company.${name.replaceAll(
                      " ",
                      ""
                    )}.${value.name.replaceAll(" ", "")}`}
                    control={control}
                    render={({ field }) => {
                      return (
                        <Select
                          fullWidth
                          readOnly={!editMode}
                          multiple={
                            (value as { dropDownType: string }).dropDownType ==
                            "multiple"
                              ? true
                              : false
                          }
                          value={field.value}
                          onChange={field.onChange}
                        >
                          {(value as { data: string[] }).data.map(
                            (value: string, index: number) => (
                              <MenuItem key={index} value={value}>
                                {value}
                              </MenuItem>
                            )
                          )}
                        </Select>
                      );
                    }}
                  />
                )}
                {value.type == EDataFieldType.Phone && (
                  <TextField
                    variant="outlined"
                    InputProps={{ readOnly: !editMode }}
                    type="tel"
                    {...register(
                      `Company.${name.replaceAll(
                        " ",
                        ""
                      )}.${value.name.replaceAll(" ", "")}`
                    )}
                    fullWidth
                  />
                )}
                {value.type == EDataFieldType.Email && (
                  <TextField
                    variant="outlined"
                    InputProps={{ readOnly: !editMode }}
                    type="email"
                    {...register(
                      `Company.${name.replaceAll(
                        " ",
                        ""
                      )}.${value.name.replaceAll(" ", "")}`
                    )}
                    fullWidth
                  />
                )}
                {value.type == EDataFieldType.Date && (
                  <Controller
                    name={`Company.${name.replaceAll(
                      " ",
                      ""
                    )}.${value.name.replaceAll(" ", "")}`}
                    control={control}
                    render={({ field: { onChange, value } }) => {
                      let date: any = new Date(value);

                      date = `${date.getFullYear()}-${String(
                        date.getMonth() + 1
                      ).padStart(2, "0")}-${String(date.getDate()).padStart(
                        2,
                        "0"
                      )}`;
                      return (
                        <TextField
                          variant="outlined"
                          InputProps={{ readOnly: !editMode }}
                          type="date"
                          value={date}
                          fullWidth
                          onChange={onChange}
                        />
                      );
                    }}
                  />
                )}
              </Stack>
            </Grid>
          );
        })}
      </Grid>
    </Stack>
  );
}

export default CompanyForm;
