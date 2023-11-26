import React, { useState } from "react"
import HeaderContent from "@/app/components/HeaderContent"
import PatientEntryForm from "@/app/components/EnterPatient"
import { NATIONALID } from "@/app/utils/constants"

async function getPatientInfo(idType: string, idValue: string) {

  const response = await fetch(`http://localhost:8080/patient?idType=${idType}&idVal=${idValue}`, 
    {
      method: "GET", 
      headers: {"Accept": "application/json"},
      cache: 'no-cache'
    }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json()
  })
  console.log(response)
  return response
} 

type searchParams = {
  idType: NATIONALID,
  idValue: string
}

export default async function EditPatientPage({ searchParams }: {
  searchParams : searchParams
}) {
  const data = await getPatientInfo(searchParams.idType, searchParams.idValue)
  data["NationalIDType"] = searchParams.idType
  data["NationalIDValue"] = searchParams.idValue
  data["PatientUUID"] = data["UUID"]
  data["InPatient"] = data["CurrentCare"]

  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent />
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="content">
        <PatientEntryForm isEditMode={true} data={data}/>
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}

