'use client'
import styles from './styles/ReportUploadOverview.module.css'
import ExplorerSideBar from "./ExplorerSidebar";
import { useState } from "react";
import { PatientBasicInfo, ReportFiles } from "../utils/dataTypes";
import { Report } from './utils/Report';
import ReportUploadCard from './utils/ReportUploadCard';

export default function ReportUploadOverview(
  { reportsList, data }: {reportsList: ReportFiles, data: PatientBasicInfo}) {
  
  const [showXray, setShowXray] = useState('')
  console.log(showXray)
  return (
    <>
      <ExplorerSideBar reportFiles={reportsList} setShowXray={setShowXray} />
      <div className={styles.reportUploadViewCard}>
        <ReportUploadCard />
        { showXray ? <Report patientUUID={data["UUID"]} reportType="xrays" showReport={showXray} /> : <></> }
      </div>
    </>
  )
}
  
  