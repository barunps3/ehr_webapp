import React from "react";
import { searchResult } from "./SearchCard";
import styles from './styles/SearchCard.module.css'
import { useRouter } from "next/navigation";
import Link from "next/link";

const external_url = "https://www.google.com"

function ResultRow({ patient }: {patient: searchResult}) {
  const router = useRouter();
  console.log("value in result row:", patient)
  return (
      <Link href={{
        pathname: '/search/patient',
        query: {
          idType: `${patient.IdType}`,
          idValue: `${patient.IdValue}`,
        }
      }}>
        <div className="rowCell">{patient.FirstName} {patient.LastName}</div>
        <div className="rowCell">{patient.Gender}</div>
        <div className="rowCell">{patient.DateOfBirth}</div>
        <div className="rowCell">{patient.IdType}</div>
        <div className="rowCell">{patient.IdValue}</div>
      </Link>

    // <tr key={patient.IdValue} onClick={() => router.push(`/search/patient?idType=${patient.IdType}&idValue=${patient.IdValue}`)}>
    //   <td>{patient.FirstName} {patient.LastName}</td>
    //   <td>{patient.Gender}</td>
    //   <td>{patient.DateOfBirth}</td>
    //   <td>{patient.IdType}</td>
    //   <td>{patient.IdValue}</td>
    // </tr>
  )
}

export default function SearchResultCard({ searchResult }: { searchResult: searchResult[] }) {
  const patients = searchResult.map((patient) => <ResultRow patient={patient} />)

  if (searchResult.length > 0) {
    return (
      <div className={styles.resultsContainer}>
        <div className="table">
          <div className="headerCell">Name</div>
          <div className="headerCell">Gender</div>
          <div className="headerCell">Date of Birth</div>
          <div className="headerCell">ID Type</div>
          <div className="headerCell">ID Value</div>
        </div>
        {patients}
        {/* <table>
          <tbody>
            <tr className={styles.headerRow}>
              <td>Name</td><td>Gender</td><td>Date of Birth</td><td>ID Type</td><td>ID value</td>
            </tr>
            {patients}
          </tbody>
        </table> */}
      </div>
    )
  }
}