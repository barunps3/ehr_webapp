import React from "react";
import { searchResult } from "./SearchCard";
import styles from './SearchCard.module.css'
import { useRouter } from "next/navigation";

const external_url = "https://www.google.com"

function ResultRow({ patient }: {patient: searchResult}) {
  const router = useRouter();
  console.log("value in result row:", patient)
  return (
    <tr key={patient.IdValue} onClick={() => router.push('https://www.google.com')}>
      <td>{patient.FirstName} {patient.LastName}</td>
      <td>{patient.Gender}</td>
      <td>{patient.DateOfBirth}</td>
      <td>{patient.IdType}</td>
      <td>{patient.IdValue}</td>
    </tr>
  )
}

export default function SearchResultCard({ searchResult }: { searchResult: searchResult[] }) {
  const patients = searchResult.map((patient) => <ResultRow patient={patient} />)

  if (searchResult.length > 0) {
    return (
      <div className={styles.resultsContainer}>
      <table>
        <tbody>
          <tr className={styles.headerRow}>
            <td>Name</td><td>Gender</td><td>Date of Birth</td><td>ID Type</td><td>ID value</td>
          </tr>
          {patients}
        </tbody>
      </table>
      </div>
    )
  }
}