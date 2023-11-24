import React from "react"
import styles from './styles/SearchCard.module.css'

export type searchResult  = {
  [key: string]: string
  FirstName: string
  LastName: string
  Gender: string
  DateOfBirth: string
  InsuranceId: string
  PhoneNum: string
  EmergencyPhoneNum: string
  Address: string
  IdType: string
  IdValue: string
  Id: string
}

async function getPatientByIdType(url: string, idType: string, idValue: string): Promise<any> {
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
  setSearchResult: React.Dispatch<React.SetStateAction<searchResult[]>>
) {
  const patientId = formData.get("patientId")?.toString()
  const idType = formData.get("idType")?.toString()
  if (patientId != null && idType != null) {
    let patient = await getPatientByIdType(
      "http://localhost:8080/patient", idType, patientId) as searchResult

    patient["IdType"]= idType,
    patient["IdValue"] = patientId
    console.log("return patient data: ", patient)
    setSearchResult([patient])
  }
}

export function IDSelector({ className }:{className?: string}) {
  return (
    <>
      <select className={className} defaultValue="" name="idType" required>
        <option value="" disabled>ID Type</option>
        <option value="aadharcard">Aadhar Card</option>
        <option value="passport">Passport</option>
        <option value="hospital-patient-id">Patient ID</option>
      </select>
      <input type="search" id="patient_id" name="patientId" placeholder="-- Please select ID type --" required />
    </>
  )
}


export default function SearchCard({ setSearchResult }:
  { setSearchResult:React.Dispatch<React.SetStateAction<searchResult[]>> }) {
  return (
    <div className={styles.flexContainer}>
      <form id="search-id" className={styles.searchInput} action={(formData) => searchPatients(formData, setSearchResult)}>
        <IDSelector className={styles.select} />
      </form>

      <div>
        <button className={styles.btn} form="search-id" id="search" type="submit">Search</button>
        <button className={styles.btn} id={styles.addPatient} type="button">+ Add new patient</button>
      </div>

    </div>
  )
}