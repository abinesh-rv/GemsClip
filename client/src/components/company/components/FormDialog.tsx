import { Box, Button, Container, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import { CompanyDetailsPeopleData, ContactListData } from "../data";
import {
  Control,
  UseFieldArrayRemove,
  UseFieldArrayUpdate,
  UseFormGetValues,
  UseFormRegister,
  UseFormSetValue,
} from "react-hook-form";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import CompanyForm from "../CompanyForm";
import DeleteIcon from "@mui/icons-material/Delete";

function FormDialog({
  isVisible,
  register,
  control,
  name,
  data,
  remove,
  setIsVisible,
  setValue,
  initValue,
  update,
  index,
}: {
  isVisible: boolean;
  register: UseFormRegister<any>;
  control: Control;
  name: string;
  data: typeof CompanyDetailsPeopleData | typeof ContactListData;
  remove: UseFieldArrayRemove;
  setIsVisible: React.Dispatch<
    React.SetStateAction<{
      visible: boolean;
      index: number;
    }>
  >;
  setValue: UseFormSetValue<any>;
  initValue: any;
  index: number;
  update: any;
}) {
  const [editMode, setEditMode] = useState(false);
  return (
    <>
      {isVisible && (
        <Box
          sx={{
            position: "fixed",
            zIndex: 5000,
            top: "20%",
            height: "50vh",
          }}
        >
          <Container
            maxWidth="md"
            sx={{
              maxHeight: "60vh",
              overflowY: "scroll",
              backgroundColor: "primary.main",
              p: 4,
              borderRadius: "15px",
            }}
          >
            <Stack>
              <Stack direction={"row"} justifyContent={"flex-end"} spacing={2}>
                {editMode && (
                  <>
                    <Button
                      color="warning"
                      sx={{ width: "fit-content", mr: 1 }}
                      onClick={() => {
                        setValue(`Company.${name}`, initValue);
                        update(index, initValue);
                        setEditMode(false);
                      }}
                    >
                      <RestartAltIcon fontSize="medium" />
                      Reset
                    </Button>
                    <Button
                      color="success"
                      sx={{ width: "fit-content", mr: 1 }}
                      onClick={() =>
                        setIsVisible((value) => ({ ...value, visible: false }))
                      }
                    >
                      <SaveIcon fontSize="medium" />
                      Save
                    </Button>
                  </>
                )}
                {!editMode && (
                  <>
                    <Button
                      color="info"
                      sx={{ width: "fit-content", mr: 1 }}
                      onClick={() => setEditMode(true)}
                    >
                      <EditIcon fontSize="medium" />
                      Edit
                    </Button>
                    <Button
                      color="error"
                      sx={{ width: "fit-content", mr: 1 }}
                      onClick={() =>
                        setIsVisible((value) => ({ ...value, visible: false }))
                      }
                    >
                      <CloseIcon fontSize="medium" />
                      Close
                    </Button>
                  </>
                )}
              </Stack>
              <CompanyForm
                register={register}
                control={control}
                name={name}
                editMode={editMode}
                data={data}
              />
            </Stack>
            <Stack direction={"row"} justifyContent={"flex-end"}>
              <Button
                sx={{ width: "fit-content" }}
                color="error"
                onClick={() => {
                  remove(index);
                  setIsVisible((value) => ({ ...value, visible: false }));
                }}
              >
                <DeleteIcon fontSize="medium" /> Delete
              </Button>
            </Stack>
          </Container>
        </Box>
      )}
    </>
  );
}

export default FormDialog;
