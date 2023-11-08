import React from "react"
import styles from './SearchCard.module.css'

export default function SearchCard() {
  return (
    <>
    <div className={styles.flexContainer}>
      <form id="search-id" className={styles.searchInput}>
        <select className={styles.select} name="id-selector" required>
          <option value="" disabled>ID Type</option>
          <option value="aadhar-card">Aadhar Card</option>
          <option value="passport">Passport</option>
          <option value="hospital-patient-id">Patient ID</option>
        </select>
        <input type="search" id="patient_id" name="Patient ID" placeholder="-- Please select ID type --" required />
      </form>

      <div>
        <button className={styles.btn} form="search-id" id="search" type="submit">Search</button>
        <button className={styles.btn} id={styles.addPatient} type="button">+ Add new patient</button>
      </div>

      <div id={styles.resultsContainer}></div>
    </div>
    </>
  )
}