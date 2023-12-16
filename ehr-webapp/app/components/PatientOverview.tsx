'use client'
import ReportsViewCard from "./ReportsViewCard";
import ExplorerSideBar from "./ExplorerSidebar";
import { useState } from "react";
import { PatientBasicInfo, ReportFiles } from "../utils/dataTypes";

export default function PatientOverview(
  { reportsList, data }: {reportsList: ReportFiles, data: PatientBasicInfo}) {
  
  const [showXray, setShowXray] = useState('')
  console.log(showXray)
  return (
    <>
      <ExplorerSideBar reportFiles={reportsList} setShowXray={setShowXray} />
      <ReportsViewCard patientUUID={data["UUID"]} showXray={showXray} />
    </>
  )
}