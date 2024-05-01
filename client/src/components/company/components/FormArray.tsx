import React, { useState } from "react";
import {
  Control,
  Controller,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
  useFieldArray,
} from "react-hook-form";
import {
  CompanyDetailsPeopleBasicData,
  CompanyDetailsPeopleData,
  ContactListData,
} from "../data";
import {
  Stack,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import VisibilityIcon from "@mui/icons-material/Visibility";
import FormDialog from "./FormDialog";
import { isVisible } from "@testing-library/user-event/dist/utils";

function FormArray({
  register,
  control,
  data,
  basicData,
  name,
  setValue,
  initValue,
}: {
  register: UseFormRegister<any>;
  control: Control;
  data: typeof CompanyDetailsPeopleData | typeof ContactListData;
  basicData: typeof CompanyDetailsPeopleBasicData | typeof ContactListData;
  name: string;
  setValue: UseFormSetValue<any>;
  initValue: any;
}) {
  const [dialogData, setDialogData] = useState({
    visible: false,
    index: 0,
  });
  const { fields, append, remove, update } = useFieldArray({
    control,
    name: name,
  });

  return (
    <Stack spacing={2}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Typography variant="h4">People List</Typography>
        <Button onClick={append}>
          <AddIcon color="info" fontSize="small" sx={{ mr: 1 }} />
          Add
        </Button>
      </Stack>

      {fields.length > 0 ? (
        <TableContainer>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell>S.NO</TableCell>
                {basicData.map((value, index) => (
                  <TableCell key={index}>{value.name}</TableCell>
                ))}
                <TableCell>View</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fields.map((item, index: number) => {
                return (
                  <TableRow key={index}>
                    <TableCell>{index + 1}</TableCell>
                    {basicData.map((value, i) => (
                      <TableCell key={i}>
                        <TextField
                          {...register(
                            `${name}.${index}.${value.name.replaceAll(" ", "")}`
                          )}
                          InputProps={{ readOnly: true }}
                        />
                      </TableCell>
                    ))}
                    <TableCell>
                      <Button
                        onClick={() =>
                          setDialogData({ visible: true, index: index })
                        }
                      >
                        <VisibilityIcon
                          color="info"
                          fontSize="small"
                          sx={{ mr: 1 }}
                        />
                        View
                      </Button>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Stack>
          <Typography align="center">Currently Empty</Typography>
        </Stack>
      )}
      {dialogData.visible && (
        <FormDialog
          isVisible={dialogData.visible}
          register={register}
          control={control}
          data={data}
          remove={remove}
          name={`${name.replace("Company.", "")}.${dialogData.index}`}
          setIsVisible={setDialogData}
          setValue={setValue}
          initValue={initValue[dialogData.index]}
          update={update}
          index={dialogData.index}
        />
      )}
    </Stack>
  );
}

export default FormArray;
