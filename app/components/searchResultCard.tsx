import React from "react";
import styles from './styles/SearchCard.module.css'
import Link from "next/link";
import { PatientFormData } from "../utils/dataTypes";


function ResultRow({ patient }: {patient: PatientFormData}) {
  console.log("value in result row:", patient)
  return (
    <tr>
      <td>{patient.FirstName} {patient.LastName}</td>
      <td>{patient.Gender}</td>
      <td>{patient.DateOfBirth}</td>
      <td>{patient.NationalIDType}</td>
      <td>{patient.NationalIDValue}</td>
      <td>
        <Link href={{
          pathname: '/search/patient',
          query: {
            idType: `${patient.NationalIDType}`,
            idValue: `${patient.NationalIDValue}`,
          }
        }} target="_blank">Edit Profile</Link><br />
        <Link href={{
          pathname: '/patienthistory',
          query: {
            idType: `${patient.NationalIDType}`,
            idValue: `${patient.NationalIDValue}`,
          }
        }} target="_blank">Medical History</Link>
        </td>
    </tr>
  )
}

export default function SearchResultCard({ searchResult }: { searchResult: PatientFormData[] }) {
  const patients = searchResult.map((patient, index) => <ResultRow patient={patient} key={index} />)

  if (searchResult.length > 0) {
    return (
      <div className={styles.resultsContainer}>
        <table>
          <tbody>
            <tr key={0} className={styles.headerRow}>
              <td>Name</td><td>Gender</td><td>Date of Birth</td><td>ID Type</td><td>ID value</td><td>View</td>
            </tr>
            {patients}
          </tbody>
        </table>
      </div>
    )
  }
}