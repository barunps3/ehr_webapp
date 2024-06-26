import React from "react";
import HeaderContent from "../components/HeaderContent";
import PatientOverview from "../components/PatientOverview";
import { PageName } from "../utils/constants";
import { searchParams } from "../utils/dataTypes";
import { getListOfReports, getPatientBasicInfo } from "../lib/fetches";
import BasicInfoBar from "../components/BasicInfoBar";

export default async function PatientHistoryPage({ searchParams }: 
  {searchParams: searchParams}) {
  
  const basicInfo = await getPatientBasicInfo(searchParams.idType, searchParams.idValue) 
  const reportInfo = await getListOfReports(basicInfo["UUID"]) 

  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent pageName={PageName.PatientHistory}/>
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="patientHistContent">
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