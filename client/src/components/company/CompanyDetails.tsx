import {
  Button,
  Stack,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import RestartAltIcon from "@mui/icons-material/RestartAlt";
import { useParams, useNavigate } from "react-router-dom";
import CompanyForm from "./CompanyForm";
import { useForm } from "react-hook-form";
import { TCompany, TCompanyInfo } from "./types";
import {
  CompanyDetailsPeopleBasicData,
  CompanyDetailsPeopleData,
  ContactListData,
  EpfoData,
  EsicData,
  FeeDetailsData,
  IfData,
  ShramSuvidhaData,
  companyDetailsData,
  companyGeneralData,
  emptyCompanyData,
} from "./data";
import FormArray from "./components/FormArray";

function CompanyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState,
    setValue,
    getValues,
  } = useForm<TCompany>();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [editMode, setEditMode] = useState<boolean>(false);
  const [registrationActiveStep, setRegistrationActiveStep] =
    useState<number>(0);

  const [formData, setFormData] = useState<undefined | TCompanyInfo>();
  const steps = [
    "General",
    "Company Details",
    "Registration",
    "Contact List",
    // "Employees",
    "Fee",
  ];
  const registrationSteps = ["EPFO", "ESIC", "Shram Suvidha", "IF"];

  const onSubmit = async (submitData: TCompany) => {
    if (id == "create") {
      await createCompany(submitData);
    } else {
      await updateCompanyData(submitData);
    }
  };

  const createCompany = async (submitData: TCompany) => {
    const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/company`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submitData.Company),
    });
    if (res.ok) {
      let { data } = await res.json();
      data = JSON.parse(data);
      navigate(`../${data}`, { relative: "path" });
    }
  };

  const updateCompanyData = async (submitData: TCompany) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/company/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData.Company),
      }
    );
    if (res.ok) {
      let { data } = await res.json();
      data = JSON.parse(data);
      setValue("Company", data);
      setFormData(data);
    }
  };

  console.log(formData);

  const fetchCompanyData = async (id: string) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/company/${id}`
    );
    if (res.ok) {
      let { data } = await res.json();
      data = JSON.parse(data);
      setValue("Company", data);
      setFormData(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      if (id != undefined) {
        if (id == "create") {
          setValue("Company", emptyCompanyData);
          setFormData(emptyCompanyData);
          setEditMode(true);
        } else {
          await fetchCompanyData(id);
        }
      }
    };
    fetchData();
  }, []);

  return formData != undefined ? (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={4} sx={{ mb: 4 }}>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Button onClick={() => navigate("/company")}>Back</Button>

          {id == "create" ? (
            <Stack>
              <Button type="submit">
                <SaveIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                Save
              </Button>
            </Stack>
          ) : (
            <Stack direction={"row"} spacing={4}>
              {!editMode && (
                <Button onClick={() => setEditMode(true)}>
                  <EditIcon color="info" fontSize="small" sx={{ mr: 1 }} />
                  Edit
                </Button>
              )}
              {editMode && (
                <>
                  <Button
                    onClick={() => {
                      setValue("Company", formData);
                    }}
                  >
                    <RestartAltIcon
                      color="warning"
                      fontSize="small"
                      sx={{ mr: 1 }}
                    />
                    Reset
                  </Button>
                  <Button type="submit">
                    <SaveIcon color="success" fontSize="small" sx={{ mr: 1 }} />
                    Save
                  </Button>
                </>
              )}
            </Stack>
          )}
        </Stack>

        <Stepper nonLinear activeStep={activeStep}>
          {steps.map((step: string, index: number) => (
            <Step key={index}>
              <StepButton onClick={() => setActiveStep(index)}>
                {step}
              </StepButton>
            </Step>
          ))}
        </Stepper>

        {activeStep == 0 && (
          <CompanyForm
            register={register}
            editMode={editMode}
            control={control}
            name={steps[0]}
            data={companyGeneralData}
          />
        )}
        {activeStep == 1 && (
          <>
            <CompanyForm
              register={register}
              editMode={editMode}
              control={control}
              name={steps[1]}
              data={companyDetailsData}
            />
            {formData.CompanyDetails != undefined && (
              <FormArray
                register={register}
                control={control}
                data={CompanyDetailsPeopleData}
                basicData={CompanyDetailsPeopleBasicData}
                name={"Company.CompanyDetails.PartnerList"}
                setValue={setValue}
                initValue={formData.CompanyDetails.PartnerList}
              />
            )}
          </>
        )}
        {activeStep == 2 && (
          <>
            <Stepper nonLinear activeStep={registrationActiveStep}>
              {registrationSteps.map((step: string, index: number) => (
                <Step key={index}>
                  <StepButton onClick={() => setRegistrationActiveStep(index)}>
                    {step}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            {registrationActiveStep == 0 && (
              <CompanyForm
                register={register}
                editMode={editMode}
                control={control}
                name={`${steps[2]}.${registrationSteps[0]}`}
                data={EpfoData}
              />
            )}
            {registrationActiveStep == 1 && (
              <CompanyForm
                register={register}
                editMode={editMode}
                control={control}
                name={`${steps[2]}.${registrationSteps[1]}`}
                data={EsicData}
              />
            )}
            {registrationActiveStep == 2 && (
              <CompanyForm
                register={register}
                editMode={editMode}
                control={control}
                name={`${steps[2]}.${registrationSteps[2]}`}
                data={ShramSuvidhaData}
              />
            )}
            {registrationActiveStep == 3 && (
              <CompanyForm
                register={register}
                editMode={editMode}
                control={control}
                name={`${steps[2]}.${registrationSteps[3]}`}
                data={IfData}
              />
            )}
          </>
        )}
        {activeStep == 3 && (
          <FormArray
            register={register}
            control={control}
            data={ContactListData}
            basicData={ContactListData}
            name={"Company.ContactList"}
            setValue={setValue}
            initValue={formData.ContactList}
          />
        )}
        {activeStep == 4 && (
          <CompanyForm
            register={register}
            editMode={editMode}
            control={control}
            name={steps[4]}
            data={FeeDetailsData}
          />
        )}
      </Stack>
    </form>
  ) : (
    <Typography>Loading....</Typography>
  );
}

export default CompanyDetails;
