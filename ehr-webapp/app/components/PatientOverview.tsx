'use client'
import ExplorerSideBar from "./ExplorerSidebar";
import { PatientBasicInfo, ReportFiles } from "../utils/dataTypes";
import styles from './styles/PatientReportViewCard.module.css'
import ImageGallery from "./utils/ImageGallery"
import CommentsCard from "./utils/CommentsCard"
import { getReports } from "../lib/fetches"
import { useEffect, useState } from "react"

const testImages = [
  "/localImages/lumbar-spine-front.png",
  "/localImages/lumbar-spine-side.png"
]

export function Report({ patientUUID, reportType, showReport }: 
  {patientUUID: string, reportType: string, showReport: string}) {
  const [fetchedImages, setImages] = useState<string[]>([])

  useEffect(() => {
    async function fetchImages() {
      const images = []
      const reports = await getReports(patientUUID, reportType, showReport) 
      for (const report of reports) {
        images.push(report["BlobUrl"])
      }
      setImages(images)
    }
    fetchImages()
  }, [])

  console.log("blob Images", fetchedImages)
  if (fetchedImages.length != 0) {
    return (
      <div className={styles.reportContainer}>
        <ImageGallery defaultImages={fetchedImages}/>
        <CommentsCard />
      </div>
    )
  }
}

export default function PatientOverview(
  { reportsList, data }: {reportsList: ReportFiles, data: PatientBasicInfo}) {
  
  const [showXray, setShowXray] = useState('')
  console.log(showXray)
  return (
    <>
      <ExplorerSideBar reportFiles={reportsList} setShowXray={setShowXray} />
      <div className={styles.reportsViewCard}>
        { showXray ? <Report patientUUID={data["UUID"]} reportType="xrays" showReport={showXray} /> : <></> }
        { showXray ? <Report patientUUID={data["UUID"]} reportType="xrays" showReport={showXray} /> : <></> }
      </div>
    </>
  )
}