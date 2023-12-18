import { PatientBasicInfo } from "../utils/dataTypes";

export default function BasicInfoBar({ data, idType, idValue }:
  {data: PatientBasicInfo, idType: string, idValue: string}){
  return (
  <div className="patientInfoBar">
    <div><p>Name: {data.FirstName} {data.LastName}</p></div>
    <div><p>Age: 30</p></div>
    <div><p>Sex: {data.Gender}</p></div>
    <div><p>Inpatient: {data.CurrentCare === "INPATIENT" ? "Yes" : "No"}</p></div>
    <div><p>ID: {idValue} {idType}</p></div>
  </div>
  )
}