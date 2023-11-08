'use server'

import { Dispatch } from "react"

type searchPatientProps = {
    formData: FormData,
    setSearchResult: React.Dispatch<React.SetStateAction<object[]>>
}

export function searchPatients(
        formData: FormData, 
        setSearchResult: React.Dispatch<React.SetStateAction<object[]>>
    ) {
    const patientId = formData.get("patientId")
    const idType = formData.get("idType")

    const barunDetails = {
        "name" : {
          "firstName": "Barun",
          "lastName": "Mazumdar",
        },
        "gender": "Male",
        "dateOfBirth": "14/10/1992",
        "idType": "Aadhar Card",
        "idValue": "FFUP38U"
    }

    setSearchResult([barunDetails])
}