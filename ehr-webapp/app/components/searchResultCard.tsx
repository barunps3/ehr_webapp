import React from "react";
import { searchResult } from "./SearchCard";
import styles from './SearchCard.module.css'

export default function SearchResultCard({ searchResult }: { searchResult: searchResult }) {
  const patients = searchResult.map((patient) => {
    return (
      <tr key={patient.idValue}>
        <td>{patient.name.firstName} {patient.name.lastName}</td>
        <td>{patient.gender}</td>
        <td>{patient.dateOfBirth}</td>
        <td>{patient.idType}</td>
        <td>{patient.idValue}</td>
      </tr>
    )
  })

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

  return <></>
}