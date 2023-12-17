import styles from './styles/PatientReportViewCard.module.css'
import Report from './Report'

type ReportsViewCard = {
  patientUUID: string
  showXray: string
}

export default function ReportsViewCard({ patientUUID, showXray }: ReportsViewCard) {
  return (
    <div className={styles.reportsViewCard}>
      { showXray ? <Report patientUUID={patientUUID} reportType="xrays" showReport={showXray} /> : <></> }
    </div>
  )
}