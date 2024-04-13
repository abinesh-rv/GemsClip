export enum EDataFieldType {
  Number = 1,
  String,
  Dropdown,
  Phone,
  Email,
  Date,
}

export type TPartner = {
  AadhaarName: string;
  DateOfBirth: Date;
  AadhaarNumber: string;
  Address: string;
  PAN: string;
  Mobile: string;
  Email: string;
  Photo: string;
};

export type TGeneral = {
  CompanyName: string;
  CompanyShort: string;
  CompanyId: number;
  Services: string[] | string;
  ESIPFCreatedBy: string;
  CompanyType: string;
  Status: string;
  BusinessAddress: string;
  City: string;
  PostalCode: string;
  District: string;
  State: string;
  ContactPersonName: string;
  ContactPersonRole: string;
  ContactPersonMobile: string;
  ContactPersonWhatsapp: string;
  ContactPersonMailId: string;
};

export type TCompanyDetails = {
  CompanyPAN: string;
  PANDate: Date;
  PANName: string;
  GSTDate: Date;
  BankAccountName: string;
  BankAccountNumber: string;
  IFSC: string;
  BankType: string;
  BankName: string;
  BranchName: string;
  LIN: string;
  CIN: string;
  CINDate: string;
  BranchAddress: string;
  NatureOfBusiness: string;
  PartnerList: TPartner[];
  GSTNumber: string;
};

export type TEPFO = {
  EPFOStatus: string;
  EPFOLogin: string;
  EPFOPassword: string;
  EPFOCode: string;
  EPFOCodeType: string;
  EPFOMailID: string;
  EPFOMobile: string;
  EPFOFilingSince: Date;
  EPFODateOfCoverage: Date;
  EPFOCoverageType: string;
  DSCStatus: string;
  DSCExpiryDate: Date;
  DSCPassword: string;
  ESignStatusEPFO: string;
  EPFOOfficeName: string;
  EPFOOfficeAddress: string;
  EPFOOfficeContactNumber: string;
};

export type TESIC = {
  ESICStatus: string;
  ESICLogin: string;
  ESICPassword: string;
  ESICCode: string;
  ESICCodeType: string;
  ESICMailId: string;
  ESICMobile: string;
  ESICFilingSince: Date;
  ESICDateOfCoverage: Date;
  ESICOfficeName: string;
  ESICOfficeAddress: string;
  ESICOfficeContactNumber: string;
};

export type TShramSuvidha = {
  ShramSuvidhaLogin: string;
  ShramSuvidhaPassword: string;
  ShramSuvidhaMailId: string;
  ShramSuvidhaMobile: string;
  NearestPoliceStation: string;
  NICCode: string;
  BusinessPlace: string;
  DateOfApplication: Date;
  LeaseDateFrom: Date;
  LeaseDateTo: Date;
};

export type TIF = {
  IFStatus: string;
  IFLogin: string;
  IFPassword: string;
  IFLicenseNumber: string;
  IFMailId: string;
  IFMobile: string;
  IFDateOfRegistration: Date;
  IFRenewalCharges: number;
  IFRenwalSince: Date;
  NumberOfPressureVessels: number;
  ISMLogin: string;
  ISMPassword: string;
};

export type TContact = {
  ContactName: string;
  Designation: string;
  Email: string;
  Mobile: string;
};

export type TFee = {
  Services: string[];
  Period: string;
  Fee: number;
};

export type TCompany = {
  Id?: string;
  General?: TGeneral;
  CompanyDetails?: TCompanyDetails;
  Registration?: {
    EPFO?: TEPFO;
    ESIC?: TESIC;
    ShramSuvidha?: TShramSuvidha;
    IF?: TIF;
  };
  ContactList: TContact[];
  Fee: TFee;
};

export type TCompanyBasicInfo = {
  Id: string;
  General: TGeneral;
};

// export type TCompanyGeneral = {
//   CompanyName: string;
//   CompanyShort: string;
//   CompanyId: number;
//   Services: string[] | string;
//   Status: string;
//   EsipfCreatedBy: string;
//   CompanyType: string;
//   BusinessAddress: string;
//   City: string;
//   PostalCode: string;
//   District: string;
//   State: string;
//   ContactPerson: string;
//   ContactPersonRole: string;
//   ContactPersonMobile: string;
//   ContactPersonWhatsapp: string;
//   ContactPersonMailId: string;
// };

// type TCompanyDetails = {
//   companyPan: string;
//   panDate: Date;
//   panName: string;
//   gstNumber: string;
//   gstDate: Date;
//   bankAccountName: string;
//   bankAccountNumber: number;
//   ifsc: string;
//   bankType: string;
//   bankName: string;
//   branchName: string;
//   lin: number;
//   cin?: string;
//   cinDate?: Date;
//   branchAddress: string;
//   city: string;
//   postalCode: number;
//   district: string;
//   state: string;
//   natureOfBusiness: string;
// } & TCompanyPeople;

// type TCompanyPeople = {
//   aadhaarName: string;
//   dateOfBirth: Date;
//   aadhaarNumber: number;
//   address: string;
//   pan: string;
//   panName: string;
//   mobile: number;
//   email: string;
//   din?: number;
//   photo: string;
// };

// type TCompanyRegistration = TEpfo & TEsci & TShramSuvidha & TIf;

// type TEpfo = {
//   epfoStatus: "Active" | "Inactive" | "Hold";
//   epfoLogin: string;
//   epfoPassword: string;
//   epfoCode: string;
//   epfoCodeType: string;
//   epfoMailID: string;
//   epfoMobile: number;
//   epfoFilingSince: Date;
//   epfoDateOfCoverage: Date;
//   epfoCoverageType: string;
//   dscStatus: "Active" | "Inactive" | "Expired";
//   dscExpiryDate?: Date;
//   dscPassword?: string;
//   eSignStatusEPFO: "Active" | "Inactive" | "Under Process";
//   epfoOfficeName: string;
//   epfoOfficeAddress: string;
//   epfoOfficeContactNumber: number;
// };

// type TEsci = {
//   esicStatus: "Active" | "Inactive" | "Hold";
//   esicLogin: string;
//   esicPassword: string;
//   esicCode: string;
//   esicCodeType: string;
//   esicMailID: string;
//   esicMobile: number;
//   esicFilingSince: string;
//   esicDateOfCoverage: Date;
//   esicOfficeName: string;
//   esicOfficeAddress: string;
//   esicOfficeContactNumber: number;
// };

// type TShramSuvidha = {
//   shramSuvidhaLogin: string;
//   shramSuvidhaPassword: string;
//   shramSuvidhaMailID: string;
//   shramSuvidhaMobile: number;
//   nearestPoliceStation: string;
//   nicCode: string;
//   dateOfApplication: Date;
//   businessPlace: "Owned" | "Leased";
//   leaseDateFrom: Date;
//   leaseDateTo: Date;
// };

// type TIf = {
//   ifStatus: "Active" | "Inactive" | "Hold";
//   ifLogin: string;
//   ifPassword: string;
//   ifLicenseNumber: string;
//   ifMailID: string;
//   ifMobile: number;
//   ifDateOfRegistration: Date;
//   ifRenewalCharges: number;
//   ifRenewalSince: Date;
//   numberOfPressureVessels: number;
//   ismLogin: string;
//   ismPassword: string;
// };

// type TContactList = {
//   contactName: string;
//   designation: string;
//   mobile: number;
//   email: string;
// };

// type TFee = {
//   services: string[];
//   period: string;
//   fee: number;
// };

// export type TCompanyInput = {
//   Id: string;
//   General?: TCompanyGeneral;
//   CompanyDetails?: TCompanyDetails;
//   Registration?: TCompanyRegistration;
//   ContactList?: TContactList;
//   Fee?: TFee;
// };

// export type TCompanyBasicInfo = {
//   Id: string;
//   General: TCompanyGeneral;
// };
