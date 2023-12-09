import { FetchedPatientBasicInfo } from "../utils/dataTypes";

export async function getPatientBasicInfo(
    idType: string, idValue: string
  ): Promise<FetchedPatientBasicInfo> {

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