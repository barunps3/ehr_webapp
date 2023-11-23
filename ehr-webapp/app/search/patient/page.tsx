import React, { useState } from "react"
import HeaderContent from "@/app/components/HeaderContent"
import PatientEntryForm from "@/app/components/EnterPatient"

async function getPatientInfo(idType: string, idValue: string) {

  console.log(idType, idValue)
  const response = await fetch(`http://localhost:8080/patient?idType=${idType}&idVal=${idValue}`, 
    {
      method: "GET", 
      headers: {"Accept": "application/json"}
    }).then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json()
  })
  return response
} 

type searchParams = {
  idType: string,
  idValue: string
}

export default async function EditPatientPage({ searchParams }: {
  searchParams : {idType: string, idValue: string}
}) {
  // const data = await getPatientInfo("1c340c57-f8e9-4471-b3dc-4cfc1533a90c")
  const data = await getPatientInfo(searchParams.idType, searchParams.idValue)
  data["IdType"] = searchParams.idType
  data["IdValue"] = searchParams.idValue
  console.log(data)

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

