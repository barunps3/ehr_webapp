'use client'
import ImageGallery from "./utils/ImageGallery"
import CommentsCard from "./utils/CommentsCard"
import { getReports } from "../lib/fetches"
import styles from './styles/PatientReportViewCard.module.css'
import { useEffect, useState } from "react"

const testImages = [
  "/localImages/lumbar-spine-front.png",
  "/localImages/lumbar-spine-side.png"
]

export default function Report({ patientUUID, reportType, showReport }: 
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