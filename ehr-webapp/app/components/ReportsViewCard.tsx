import ImageGallery from "./utils/ImageGallery"
import CommentsCard from "./utils/CommentsCard"
import styles from './styles/PatientReportViewCard.module.css'

const testImages = [
  "/localImages/lumbar-spine-front.png",
  "/localImages/lumbar-spine-side.png"
]

type ReportsViewCard = {
  patientUUID: string
  showXray: boolean
}

function Report() {
  return (
    <div className={styles.reportContainer}>
      <ImageGallery defaultImages={testImages}/>
      <CommentsCard />
    </div>
  )
}

export default function ReportsViewCard({ patientUUID, showXray }: ReportsViewCard) {
  return (
    <div className={styles.reportsViewCard}>
      { showXray ? <Report /> : <></> }
    </div>
  )
}