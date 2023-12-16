import { PatientBasicInfo, ReportFiles, Xray } from "../utils/dataTypes";

export async function getPatientBasicInfo(idType: string, idValue: string): Promise<PatientBasicInfo> {

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

export async function getListOfReports(patientUUID: string): Promise<ReportFiles> {
  const response = await fetch(`http://localhost:8080/reports/${patientUUID}`, 
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

export async function getReports(
  patientUUID: string, reportType: string, uploadDate: string): Promise<Xray[]> {
  console.log(`http://localhost:8080/${reportType}/${patientUUID}?uploadDate=${uploadDate}`)
  const response = await fetch(`http://localhost:8080/${reportType}/${patientUUID}?uploadDate=${uploadDate}`, 
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