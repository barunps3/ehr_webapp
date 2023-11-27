import PatientReportViewCard from "./PatientReportViewCard";
import styles from "./styles/PatientOverview.module.css"

function BasicInfoBar(){
  return (
  <div className={styles.patientInfoBar}>
    <div><p>Name: Ume Hani</p></div>
    <div><p>Age: 30</p></div>
    <div><p>Sex: Female</p></div>
    <div><p>Inpatient: Yes</p></div>
    <div><p>ID: ZKUP38U (Aadhar Card)</p></div>
  </div>
  )
}

export default function PatientOverview() {
  return (
    <div className={styles.overviewCard}>
      <BasicInfoBar />
      <PatientReportViewCard />
    </div>
  )
}