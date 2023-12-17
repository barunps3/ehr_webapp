import HeaderContent from "@/app/components/HeaderContent"
import PatientEntryForm from "@/app/components/EnterPatient"
import { searchParams } from "@/app/utils/dataTypes"
import { getPatientBasicInfo } from "@/app/lib/fetches"
import { DefaultPatientFormData } from "@/app/utils/defaults"
import { CARETYPE } from "@/app/utils/constants"

export default async function EditPatientPage({ searchParams }: {
  searchParams : searchParams
}) {
  const data = await getPatientBasicInfo(searchParams.idType, searchParams.idValue)
  let patientFormData = DefaultPatientFormData

  patientFormData["NationalIDType"] = searchParams.idType
  patientFormData["NationalIDValue"] = searchParams.idValue
  patientFormData["PatientUUID"] = data["UUID"]
  patientFormData["InPatient"] = data["CurrentCare"] as CARETYPE.OutPatient

  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent />
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="content">
        <PatientEntryForm isEditMode={true} data={patientFormData}/>
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}

