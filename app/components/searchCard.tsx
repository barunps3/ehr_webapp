import React from "react"
import styles from './styles/SearchCard.module.css'
import { PatientFormData } from "../utils/dataTypes"
import { NATIONALID } from '../utils/constants'
import Link from "next/link";


async function getPatientByIdType(
    url: string, 
    idType: NATIONALID , 
    idValue: string
  ): Promise<any> {
  const fullURL = `${url}?idType=${idType}&idVal=${idValue}`
  const response = await fetch(fullURL,{method: "GET"}).then((response) => {
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  return response
})
  let data = await response.json()
  return data
}

async function searchPatients(
    formData: FormData,
    setSearchResult: React.Dispatch<React.SetStateAction<PatientFormData[]>>
  ) {
  const nidType = formData.get("idType")?.toString() as NATIONALID | undefined
  const nidValue = formData.get("patientId")?.toString() as PatientFormData["NationalIDType"] | undefined

  if (nidValue != undefined && nidType != undefined) {
    let patient = await getPatientByIdType(
      "http://localhost:8080/patient", nidType, nidValue) as PatientFormData

    patient["NationalIDType"] = nidType,
    patient["NationalIDValue"] = nidValue,
    console.log("return patient data: ", patient)
    setSearchResult([patient])
  }
}

export function IDSelector({ className }:{className?: string}) {
  return (
    <>
      <select className={className} defaultValue="" name="idType" required>
        <option value="" disabled>ID Type</option>
        <option value={NATIONALID.AadharCard}>Aadhar Card</option>
        <option value={NATIONALID.Passport}>Passport</option>
        <option value="hospital-patient-id">Patient ID</option>
      </select>
      <input type="search" name="patientId" placeholder="-- Please select ID type --" required />
    </>
  )
}


export default function SearchCard({ setSearchResult }:
  { setSearchResult:React.Dispatch<React.SetStateAction<PatientFormData[]>> }) {
  return (
    <div className={styles.flexContainer}>

      <form id="search-id" className={styles.searchInput} action={(formData) => searchPatients(formData, setSearchResult)}>
        <IDSelector className={styles.select} />
      </form>
      <div>
        <button className={styles.btn} form="search-id" type="submit">Search</button>
        <Link href="/patiententry" target="_blank">
          <button className={styles.btn} id={styles.addPatient} type="button">+ Add new patient</button>
        </Link>
      </div>

    </div>
  )
}