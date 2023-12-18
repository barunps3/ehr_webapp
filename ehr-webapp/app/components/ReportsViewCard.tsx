'use client'
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

type ReportsViewCard = {
  patientUUID: string
  showXray: string
}

export default function ReportsViewCard({ patientUUID, showXray }: ReportsViewCard) {
  return (
    <>
      <div className={styles.reportsViewCard}>
        { showXray ? <Report patientUUID={patientUUID} reportType="xrays" showReport={showXray} /> : <></> }
        { showXray ? <Report patientUUID={patientUUID} reportType="xrays" showReport={showXray} /> : <></> }
      </div>
    </>
  )
}