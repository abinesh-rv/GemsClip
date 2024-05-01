package models

import (
	"time"

	"go.mongodb.org/mongo-driver/bson/primitive"
)

// type CompanyBasic struct{
// 	ObjectId primitive.ObjectID `bson:"_id"`
// 	Id int32 `bson:"id"`
// 	Short string
// 	CompanyName string
// 	City string
// 	Services []string
// 	Status string
// }

type General struct {
    CompanyName           string    `bson:"CompanyName"`
    CompanyShort          string    `bson:"CompanyShort"`
    CompanyId            int       `bson:"CompanyId"`
    Services              []string  `bson:"Services"`
    ESIPFCreatedBy        string    `bson:"ESIPFCreatedBy"`
    CompanyType           string    `bson:"CompanyType"`
    Status                string    `bson:"Status"`
    BusinessAddress       string    `bson:"BusinessAddress"`
    City                  string    `bson:"City"`
    PostalCode            string    `bson:"PostalCode"`
    District              string    `bson:"District"`
    State                 string    `bson:"State"`
    ContactPersonName     string    `bson:"ContactPersonName"`
    ContactPersonRole     string    `bson:"ContactPersonRole"`
    ContactPersonMobile   string    `bson:"ContactPersonMobile"`
    ContactPersonWhatsapp string    `bson:"ContactPersonWhatsapp"`
    ContactPersonMailId   string    `bson:"ContactPersonMailId"`
}

type Partner struct {
    AadhaarName    string    `bson:"AadhaarName"`
    DateOfBirth    time.Time `bson:"DateOfBirth"`
    AadhaarNumber  string    `bson:"AadhaarNumber"`
    Address        string    `bson:"Address"`
    PAN            string    `bson:"PAN"`
    PANName        string    `bson:"PANName"`
    Mobile         string    `bson:"Mobile"`
    Email          string    `bson:"Email"`
    Photo          string    `bson:"Photo"`
}

type CompanyDetails struct {
    CompanyPAN         string    `bson:"CompanyPAN"`
    PANDate            time.Time `bson:"PANDate"`
    PANName            string    `bson:"PANName"`
    GSTDate            time.Time `bson:"GSTDate"`
    BankAccountName    string    `bson:"BankAccountName"`
    BankAccountNumber  string    `bson:"BankAccountNumber"`
    IFSC               string    `bson:"IFSC"`
    BankType           string    `bson:"BankType"`
    BankName           string    `bson:"BankName"`
    BranchName         string    `bson:"BranchName"`
    LIN                string    `bson:"LIN"`
    CIN                string    `bson:"CIN"`
    CINDate            time.Time   `bson:"CINDate"`
    BranchAddress      string    `bson:"BranchAddress"`
    NatureOfBusiness   string    `bson:"NatureOfBusiness"`
    GSTNumber          string    `bson:"GSTNumber"`
    City               string    `bson:"City"`
    PostalCode         string    `bson:"PostalCode"`
    District           string    `bson:"District"`
    State              string    `bson:"State"`
    PartnerList        []Partner `bson:"PartnerList"`
}

type EPFO struct {
    EPFOStatus            string    `bson:"EPFOStatus"`
    EPFOLogin             string    `bson:"EPFOLogin"`
    EPFOPassword          string    `bson:"EPFOPassword"`
    EPFOCode              string    `bson:"EPFOCode"`
    EPFOCodeType          string    `bson:"EPFOCodeType"`
    EPFOMailId            string    `bson:"EPFOMailId"`
    EPFOMobile            string    `bson:"EPFOMobile"`
    EPFOFilingSince       time.Time `bson:"EPFOFilingSince"`
    EPFODateOfCoverage    time.Time `bson:"EPFODateOfCoverage"`
    EPFOCoverageType      string    `bson:"EPFOCoverageType"`
    DSCStatus             string    `bson:"DSCStatus"`
    DSCExpiryDate         time.Time `bson:"DSCExpiryDate"`
    DSCPassword           string    `bson:"DSCPassword"`
    ESignStatusEPFO       string    `bson:"ESignStatusEPFO"`
    EPFOOfficeName        string    `bson:"EPFOOfficeName"`
    EPFOOfficeAddress     string    `bson:"EPFOOfficeAddress"`
    EPFOOfficeContactNumber string  `bson:"EPFOOfficeContactNumber"`
}

type ESIC struct {
    ESICStatus             string    `bson:"ESICStatus"`
    ESICLogin              string    `bson:"ESICLogin"`
    ESICPassword           string    `bson:"ESICPassword"`
    ESICCode               string    `bson:"ESICCode"`
    ESICCodeType           string    `bson:"ESICCodeType"`
    ESICMailId             string    `bson:"ESICMailId"`
    ESICMobile             string    `bson:"ESICMobile"`
    ESICFilingSince        time.Time `bson:"ESICFilingSince"`
    ESICDateOfCoverage     time.Time `bson:"ESICDateOfCoverage"`
    ESICOfficeName         string    `bson:"ESICOfficeName"`
    ESICOfficeAddress      string    `bson:"ESICOfficeAddress"`
    ESICOfficeContactNumber string  `bson:"ESICOfficeContactNumber"`
}

type ShramSuvidha struct {
    ShramSuvidhaLogin    string    `bson:"ShramSuvidhaLogin"`
    ShramSuvidhaPassword string    `bson:"ShramSuvidhaPassword"`
    ShramSuvidhaMailId   string    `bson:"ShramSuvidhaMailId"`
    ShramSuvidhaMobile   string    `bson:"ShramSuvidhaMobile"`
    NearestPoliceStation string    `bson:"NearestPoliceStation"`
    NICCode              string    `bson:"NICCode"`
    BusinessPlace        string    `bson:"BusinessPlace"`
    DateOfApplication    time.Time `bson:"DateOfApplication"`
    LeaseDateFrom        time.Time `bson:"LeaseDateFrom"`
    LeaseDateTo          time.Time `bson:"LeaseDateTo"`
}

type IF struct {
    IFStatus             string    `bson:"IFStatus"`
    IFLogin              string    `bson:"IFLogin"`
    IFPassword           string    `bson:"IFPassword"`
    IFLicenseNumber      string    `bson:"IFLicenseNumber"`
    IFMailId             string    `bson:"IFMailId"`
    IFMobile             string    `bson:"IFMobile"`
    IFDateOfRegistration time.Time `bson:"IFDateOfRegistration"`
    IFRenewalCharges     int       `bson:"IFRenewalCharges"`
    IFRenwalSince        time.Time `bson:"IFRenwalSince"`
    NumberOfPressureVessels int     `bson:"NumberOfPressureVessels"`
    ISMLogin             string    `bson:"ISMLogin"`
    ISMPassword          string    `bson:"ISMPassword"`
}

type Contact struct {
    ContactName   string `bson:"ContactName"`
    Designation   string `bson:"Designation"`
    Email         string `bson:"Email"`
    Mobile        string `bson:"Mobile"`
}

type Fee struct {
    Services []string `bson:"Services"`
    Period   string   `bson:"Period"`
    Fee      int      `bson:"Fee"`
}

type Registration struct {
    EPFO       EPFO       `bson:"EPFO"`
    ESIC       ESIC       `bson:"ESIC"`
    ShramSuvidha ShramSuvidha `bson:"ShramSuvidha"`
    IF         IF         `bson:"IF"`
}

type Company struct {
    Id           primitive.ObjectID `bson:"_id,omitempty"`
    General      General             `bson:"General"`
    CompanyDetails CompanyDetails    `bson:"CompanyDetails"`
    Registration   Registration       `bson:"Registration"`
    ContactList []Contact `bson:"ContactList"`
    Fee         Fee       `bson:"Fee"`
}

type CompanyBasicInfo struct {
    Id           primitive.ObjectID `bson:"_id,omitempty"`
    General      General             `bson:"General"`
}