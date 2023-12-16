import React, { useState } from "react";
import HeaderContent from "../components/HeaderContent";
import PatientOverview from "../components/PatientOverview";
import './patientHistory.css'
import { PAGENAME } from "../utils/constants";
import { searchParams, PatientBasicInfo } from "../utils/dataTypes";
import { getListOfReports, getPatientBasicInfo } from "../lib/fetches";

function BasicInfoBar({ data, idType, idValue }:
  {data: PatientBasicInfo, idType: string, idValue: string}){
  return (
  <div className="patientInfoBar">
    <div><p>Name: {data.FirstName} {data.LastName}</p></div>
    <div><p>Age: 30</p></div>
    <div><p>Sex: {data.Gender}</p></div>
    <div><p>Inpatient: {data.CurrentCare === "INPATIENT" ? "Yes" : "No"}</p></div>
    <div><p>ID: {idValue} {idType}</p></div>
  </div>
  )
}


export default async function PatientHistoryPage({ searchParams }: 
  {searchParams: searchParams}) {
  
  const basicInfo = await getPatientBasicInfo(searchParams.idType, searchParams.idValue) 
  const reportInfo = await getListOfReports(basicInfo["UUID"]) 

  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent pageName={PAGENAME.PatientHistory}/>
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="content">
          <BasicInfoBar data={basicInfo} idType={searchParams.idType} idValue={searchParams.idValue} />
          <PatientOverview reportsList={reportInfo} data={basicInfo} />
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}