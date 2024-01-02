'use client'
import ExplorerSideBar from "./ExplorerSidebar";
import { PatientBasicInfo, ReportFiles } from "../utils/dataTypes";
import styles from './styles/PatientReportViewCard.module.css'
import { useState } from "react"
import { Report } from "./utils/Report";

const testImages = [
  "/localImages/lumbar-spine-front.png",
  "/localImages/lumbar-spine-side.png"
]

export default function PatientOverview(
  { reportsList, data }: {reportsList: ReportFiles, data: PatientBasicInfo}) {
  
  const [showXray, setShowXray] = useState('')
  console.log(showXray)
  return (
    <>
      <ExplorerSideBar reportFiles={reportsList} setShowXray={setShowXray} />
      <div className={styles.reportsViewCard}>
        { showXray ? <Report patientUUID={data["UUID"]} reportType="xrays" showReport={showXray} /> : <></> }
      </div>
    </>
  )
}