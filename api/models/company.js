const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PartnerSchema = {
  AadhaarName: String,
  DateOfBirth: Date,
  AadhaarNumber: String,
  Address: String,
  PAN: String,
  PANName: String,
  Mobile: String,
  Email: String,
  Photo: String,
};

const EPFOSchema = {
  EPFOStatus: String,
  EPFOLogin: String,
  EPFOPassword: String,
  EPFOCode: String,
  EPFOCodeType: String,
  EPFOMailId: String,
  EPFOMobile: String,
  EPFOFilingSince: Date,
  EPFODateOfCoverage: Date,
  EPFOCoverageType: String,
  DSCStatus: String,
  DSCExpiryDate: Date,
  DSCPassword: String,
  ESignStatusEPFO: String,
  EPFOOfficeName: String,
  EPFOOfficeAddress: String,
  EPFOOfficeContactNumber: String,
};

const ESICSchema = {
  ESICStatus: String,
  ESICLogin: String,
  ESICPassword: String,
  ESICCode: String,
  ESICCodeType: String,
  ESICMailId: String,
  ESICMobile: String,
  ESICFilingSince: Date,
  ESICDateOfCoverage: Date,
  ESICOfficeName: String,
  ESICOfficeAddress: String,
  ESICOfficeContactNumber: String,
};

const ShramSuvidhaSchema = {
  ShramSuvidhaLogin: String,
  ShramSuvidhaPassword: String,
  ShramSuvidhaMailId: String,
  ShramSuvidhaMobile: String,
  NearestPoliceStation: String,
  NICCode: String,
  BusinessPlace: String,
  DateOfApplication: Date,
  LeaseDateFrom: Date,
  LeaseDateTo: Date,
};

const IFSchema = {
  IFStatus: String,
  IFLogin: String,
  IFPassword: String,
  IFLicenseNumber: String,
  IFMailId: String,
  IFMobile: String,
  IFDateOfRegistration: Date,
  IFRenewalCharges: Number,
  IFRenwalSince: Date,
  NumberOfPressureVessels: Number,
  ISMLogin: String,
  ISMPassword: String,
};

const ContactSchema = {
  ContactName: String,
  Designation: String,
  Email: String,
  Mobile: String,
};

const FeeSchema = {
  Services: [String],
  Period: String,
  Fee: Number,
};

const GeneralSchema = {
  CompanyName: String,
  CompanyShort: String,
  CompanyId: Number,
  Services: [String],
  ESIPFCreatedBy: String,
  CompanyType: String,
  Status: String,
  BusinessAddress: String,
  City: String,
  PostalCode: String,
  District: String,
  State: String,
  ContactPersonName: String,
  ContactPersonRole: String,
  ContactPersonMobile: String,
  ContactPersonWhatsapp: String,
  ContactPersonMailId: String,
};

const CompanyDetailsSchema = {
  CompanyPAN: String,
  PANDate: Date,
  PANName: String,
  GSTDate: Date,
  BankAccountName: String,
  BankAccountNumber: String,
  IFSC: String,
  BankType: String,
  BankName: String,
  BranchName: String,
  LIN: String,
  CIN: String,
  CINDate: Date,
  BranchAddress: String,
  NatureOfBusiness: String,
  GSTNumber: String,
  City: String,
  PostalCode: String,
  District: String,
  State: String,
  PartnerList: [PartnerSchema],
};

const RegistrationSchema = {
  EPFO: EPFOSchema,
  ESIC: ESICSchema,
  ShramSuvidha: ShramSuvidhaSchema,
  IF: IFSchema,
};

const ContactListSchema = {
  ContactList: [ContactSchema],
};

const FeeModelSchema = {
  Fee: FeeSchema,
};

const CompanySchema = new Schema({
  General: GeneralSchema,
  CompanyDetails: CompanyDetailsSchema,
  Registration: RegistrationSchema,
  ContactList: ContactListSchema,
  Fee: FeeModelSchema,
});

const Company = mongoose.model("companies", CompanySchema);

module.exports = Company;
