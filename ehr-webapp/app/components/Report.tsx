'use client'
import ImageGallery from "./utils/ImageGallery"
import CommentsCard from "./utils/CommentsCard"
import { getReports } from "../lib/fetches"
import styles from './styles/PatientReportViewCard.module.css'
import { useEffect } from "react"

const testImages = [
  "/localImages/lumbar-spine-front.png",
  "/localImages/lumbar-spine-side.png"
]

export default function Report({ patientUUID, reportType, showReport }: 
  {patientUUID: string, reportType: string, showReport: string}) {

  const defaultImages: string[] = []      
  useEffect(() => {
    async function doWork() {
      const reports = await getReports(patientUUID, reportType, showReport) 
      for (const report of reports) {
        defaultImages.push(report["BlobUrl"])
      }
    }
    doWork()
  }, [])

  console.log("blob Images", defaultImages)
  return (
    <div className={styles.reportContainer}>
      <ImageGallery defaultImages={defaultImages}/>
      <CommentsCard />
    </div>
  )
}