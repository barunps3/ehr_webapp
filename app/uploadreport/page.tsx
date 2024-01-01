import React from "react";
import HeaderContent from "../components/HeaderContent";
import { PageName } from "../utils/constants";
import { getPatientBasicInfo, getListOfReports } from "../lib/fetches";
import BasicInfoBar from "../components/BasicInfoBar";
import { searchParams } from "../utils/dataTypes";
import ReportUploadOverview from "../components/ReportUploadOverview";


export default async function AddPatientPage({ searchParams }: 
  {searchParams: searchParams}) {

  const basicInfo = await getPatientBasicInfo(searchParams.idType, searchParams.idValue) 
  const reportInfo = await getListOfReports(basicInfo["UUID"]) 

  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent pageName={PageName.UploadPage} />
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="patientHistContent">
          <BasicInfoBar data={basicInfo} idType={searchParams.idType} idValue={searchParams.idValue} />
          <ReportUploadOverview reportsList={reportInfo} data={basicInfo} />
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}