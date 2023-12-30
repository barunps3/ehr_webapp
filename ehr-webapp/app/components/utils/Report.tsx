import ImageGallery from "./ImageGallery"
import CommentsCard from "./CommentsCard"
import { getReports } from "@/app/lib/fetches"
import { useEffect, useState } from "react"
import styles from '../styles/Report.module.css'

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
        <div style={{width: "60%", height: "100%"}}>
          <ImageGallery defaultImages={fetchedImages}/>
        </div>
        <div style={{width: "40%", height: "100%"}}>
          <CommentsCard />
        </div>
      </div>
    )
  }
}
