import { EDataFieldType } from "./types";

export const companyGeneralData = [
  {
    name: "Company Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Company Short",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Company Id",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "Services",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "multiple",
    data: ["ESIC", "EPFO", "IF", "PV", "LWF", "PT"],
  },
  {
    name: "ESIPF Created By",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Gems Clip", "Others"],
  },
  {
    name: "Company Type",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: [
      "Proprietorship",
      "Partnership",
      "Private Limited",
      "Public limited",
      "Trust",
      "Co-Operative",
    ],
  },
  {
    name: "Business Address",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "City",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Postal Code",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "District",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "State",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Contact Person Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Contact Person Role",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Contact Person Mobile",
    value: "",
    type: EDataFieldType.Phone,
    condition: {
      length: 10,
    },
  },
  {
    name: "Contact Person Whatsapp",
    value: "",
    type: EDataFieldType.Phone,
    condition: {
      length: 10,
    },
  },
  {
    name: "Contact Person MailId",
    value: "",
    type: EDataFieldType.Email,
  },
];

/* ------------------------------------------------------------------------------------------------------ */

export const companyDetailsData = [
  {
    name: "Company PAN",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "PAN Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "PAN Date",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "GST Number",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "GST Date",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "Bank Account Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Bank Account Number",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "IFSE",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Bank Type",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["CA", "CC", "OD", "SB"],
  },
  {
    name: "Bank Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Branch Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "LIN",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "CIN",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "CIN Date",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "Branch Address ",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "City",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Postal Code",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "District",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "State",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Nature of Business",
    value: "",
    type: EDataFieldType.String,
  },
];

export const CompanyDetailsPeopleData = [
  {
    name: "Aadhaar Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: " Date Of Birth",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "Aadhaar Number",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "Address",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "PAN",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "PAN Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Mobile",
    value: "",
    type: EDataFieldType.Phone,
  },
  {
    name: "Email",
    value: "",
    type: EDataFieldType.Email,
  },
  {
    name: "DIN",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "Photo",
    value: "",
    type: EDataFieldType.String,
  },
];

/* ------------------------------------------------------------------------------------------------------ */

export const ContactListData = [
  {
    name: "Contact Name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Designation",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Mobile",
    value: "",
    type: EDataFieldType.Phone,
  },
  {
    name: "Email",
    value: "",
    type: EDataFieldType.Email,
  },
];

/* ------------------------------------------------------------------------------------------------------ */

export const FeeDetailsData = [
  {
    name: "Services",
    value: "",
    type: EDataFieldType.Date,
    dropDownType: "multiple",
    data: ["ESIC", "EPFO", "IF", "PV", "LWF", "PT"],
  },
  {
    name: "Period",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Monthly", "Half yearly", "Annually"],
  },
  {
    name: "Fee",
    value: "",
    type: EDataFieldType.Number,
  },
];

/* ------------------------------------------------------------------------------------------------------ */

export const EpfoData = [
  {
    name: "EPFO Status",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Active", "Inactive", "Hold"],
  },
  {
    name: "EPFO Login",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "EPFO Password",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "EPFO Code",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "EPFO Code Type",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Primary Code", "Sub Code"],
  },
  {
    name: "EPFO Mail Id",
    value: "",
    type: EDataFieldType.Email,
  },
  {
    name: "EPFO Mobile",
    value: "",
    type: EDataFieldType.Phone,
  },
  {
    name: "EPFO Filling Since",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "EPFO Date of Coverage",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "EPFO Coverage Type",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: [
      "a) Voluntary coverage - EPF act under section 1(4) ",
      "b) Employment strength exceed 19 - EPF act under section 1(3)(b)",
    ],
  },
  {
    name: "DSC Status",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Active", "Inactive", "Expired"],
  },
  {
    name: "DSC Expiry Date",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "DSC Password",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "e Sign Status - EPFO",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Active", "Inactive", "Under Process"],
  },
  {
    name: "EPFO Office name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "EPFO Office Address",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "EPFO Office Contact Number",
    value: "",
    type: EDataFieldType.Phone,
  },
];

/* ------------------------------------------------------------------------------------------------------ */

export const EsicData = [
  {
    name: "ESIC Status",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Active", "Inactive", "Hold"],
  },
  {
    name: "ESIC Login",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Active", "Inactive", "Hold"],
  },
  {
    name: "ESIC Password",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "ESIC Code",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "ESIC Code Type",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Primary Code", "Sub Code"],
  },
  {
    name: "ESIC Mail Id",
    value: "",
    type: EDataFieldType.Email,
  },
  {
    name: "ESIC Mobile",
    value: "",
    type: EDataFieldType.Phone,
  },
  {
    name: "ESIC Filling Since",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "ESIC Date of Coverage",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "ESIC Office name",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "ESIC Office Address",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "ESIC Office Contact Number",
    value: "",
    type: EDataFieldType.Phone,
  },
];

/* ------------------------------------------------------------------------------------------------------ */

export const ShramSuvidhaData = [
  {
    name: "Shram Suvidha Login",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Shram Suvidha Password",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Shram Suvidha Mail ID",
    value: "",
    type: EDataFieldType.Email,
  },
  {
    name: "Shram Suvidha Mobile",
    value: "",
    type: EDataFieldType.Phone,
  },
  {
    name: "Nearest Police Station",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "NIC Code",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "Date of Application",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "Business Place",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Owned", "Leased"],
  },
  {
    name: "Lease Date from",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "Lease Date to",
    value: "",
    type: EDataFieldType.Date,
  },
];

/* ------------------------------------------------------------------------------------------------------ */

export const IfData = [
  {
    name: "IF Status",
    value: [],
    type: EDataFieldType.Dropdown,
    dropDownType: "single",
    data: ["Active", "Inactive", "Hold"],
  },
  {
    name: "IF Login",
    value: "",
    type: EDataFieldType.String,
  },

  {
    name: "IF Password",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "IF License Number",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "IF Mail ID",
    value: "",
    type: EDataFieldType.Email,
  },
  {
    name: "IF Mobile",
    value: "",
    type: EDataFieldType.Phone,
  },
  {
    name: "IF Date of Registration",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "IF Renewal Charges",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "IF Renwal Since",
    value: "",
    type: EDataFieldType.Date,
  },
  {
    name: "Number of Pressure Vessels",
    value: "",
    type: EDataFieldType.Number,
  },
  {
    name: "ISM Login",
    value: "",
    type: EDataFieldType.String,
  },
  {
    name: "ISM Password",
    value: "",
    type: EDataFieldType.String,
  },
];

/* ------------------------------------------------------------------------------------------------------ */
