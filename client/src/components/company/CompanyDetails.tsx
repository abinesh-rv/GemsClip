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
import { useParams, useNavigate } from "react-router-dom";
import CompanyForm from "./CompanyForm";
import { useForm } from "react-hook-form";
import { TCompany } from "./types";
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
import { useQuery } from "@tanstack/react-query";

function CompanyDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { register, handleSubmit, watch, formState } = useForm<TCompany>();
  const [activeStep, setActiveStep] = useState<number>(0);
  const [registrationActiveStep, setRegistrationActiveStep] =
    useState<number>(0);

  const steps = [
    "General",
    "Company Details",
    "Registration",
    "Contact List",
    // "Employees",
    "Fee",
  ];
  const registrationSteps = ["EPFO", "ESIC", "Shram Suvidha", "IF"];

  const FetchCompanyById = async (id: string) => {
    const res = await fetch(
      `${process.env.REACT_APP_BACKEND_URL}/company/${id}`
    );
    let { data } = await res.json();
    data = JSON.parse(data);
    return data;
  };
  const { isSuccess, data } = useQuery({
    queryKey: ["company", id],
    queryFn: () => id != undefined && FetchCompanyById(id),
  });

  if (isSuccess) {
    console.log(data);
  }

  return isSuccess ? (
    <Stack spacing={4}>
      <Stack direction={"row"} justifyContent={"space-between"}>
        <Button onClick={() => navigate("/company")}>Back</Button>
        <Button>
          <EditIcon fontSize="small" sx={{ mr: 1 }} />
          Edit
        </Button>
      </Stack>

      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((step: string, index: number) => (
          <Step key={index}>
            <StepButton onClick={() => setActiveStep(index)}>{step}</StepButton>
          </Step>
        ))}
      </Stepper>

      {activeStep == 0 && (
        <CompanyForm
          register={register}
          name={steps[0]}
          data={companyGeneralData}
          inputData={data}
        />
      )}
      {activeStep == 1 && (
        <CompanyForm
          register={register}
          name={steps[1]}
          data={companyDetailsData}
          peopleData={CompanyDetailsPeopleData}
        />
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
              name={registrationSteps[0]}
              data={EpfoData}
            />
          )}
          {registrationActiveStep == 1 && (
            <CompanyForm
              register={register}
              name={registrationSteps[1]}
              data={EsicData}
            />
          )}
          {registrationActiveStep == 2 && (
            <CompanyForm
              register={register}
              name={registrationSteps[2]}
              data={ShramSuvidhaData}
            />
          )}
          {registrationActiveStep == 3 && (
            <CompanyForm
              register={register}
              name={registrationSteps[3]}
              data={IfData}
            />
          )}
        </>
      )}
      {activeStep == 3 && (
        <CompanyForm
          register={register}
          name={steps[3]}
          data={ContactListData}
        />
      )}
      {activeStep == 4 && (
        <CompanyForm
          register={register}
          name={steps[4]}
          data={FeeDetailsData}
        />
      )}
    </Stack>
  ) : (
    <Typography>Loading....</Typography>
  );
}

export default CompanyDetails;
