'use client'
import React from "react"
import styles from './SearchCard.module.css'
// import { searchPatients } from '../actions/searchPage'

export type searchResult = {
  name: {
    firstName: string
  },
  idValue: string
}[]

function searchPatients(
        formData: FormData, 
        setSearchResult: React.Dispatch<React.SetStateAction<searchResult>>
    ) {
    const patientId = formData.get("patientId")
    const idType = formData.get("idType")

    const barunDetails = {
        "name" : {
          "firstName": "Barun",
          "lastName": "Mazumdar",
        },
        "gender": "Male",
        "dateOfBirth": "14/10/1992",
        "idType": "Aadhar Card",
        "idValue": "FFUP38U"
    }

    setSearchResult([barunDetails])
}

type setSearchResult = {
  setSearchResult: React.Dispatch<React.SetStateAction<searchResult>>
}

export default function SearchCard({ setSearchResult }: setSearchResult) {
  return (
    <div className={styles.flexContainer}>
      <form id="search-id" className={styles.searchInput} action={(formData) => searchPatients(formData, setSearchResult)}>
        <select className={styles.select} defaultValue="" name="idType" required>
          <option value="" disabled>ID Type</option>
          <option value="aadhar-card">Aadhar Card</option>
          <option value="passport">Passport</option>
          <option value="hospital-patient-id">Patient ID</option>
        </select>
        <input type="search" id="patient_id" name="patientId" placeholder="-- Please select ID type --" required />
      </form>

      <div>
        <button className={styles.btn} form="search-id" id="search" type="submit">Search</button>
        <button className={styles.btn} id={styles.addPatient} type="button">+ Add new patient</button>
      </div>

      <div id={styles.resultsContainer}></div>
    </div>
  )
}