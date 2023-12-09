'use client'
import ReportsViewCard from "./ReportsViewCard";
import ExplorerSideBar from "./ExplorerSidebar";
import { useState } from "react";

type PatientOverview = {
  patientReports?: boolean
}

export default function PatientOverview({ patientReports }: PatientOverview) {
  const [ showXray, setShowXray] = useState(false)

  return (
    <>
      <ExplorerSideBar setShowXray={setShowXray} />
      <ReportsViewCard showXray={showXray} />
    </>
  )
}