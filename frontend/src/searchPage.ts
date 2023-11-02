const patientId = document.querySelector(".id-menu") as HTMLDivElement;
const searchInput = document.getElementById("patient_id") as HTMLInputElement;
const idTypeSelector = document.querySelector("select#id-type") as HTMLSelectElement;

idTypeSelector.addEventListener("change", () => {

  const idType = idTypeSelector.options[idTypeSelector.selectedIndex]
  // console.log(idType)
  switch (idType.value) {
    case "aadhar-card":
      searchInput.setAttribute("placeholder", "Enter Aadhar Card Number")
      break;
    case "passport":
      searchInput.setAttribute("placeholder", "Enter Passport Number")
      break;
    case "hospital-patient-id":
      searchInput.setAttribute("placeholder", "Enter Patient ID")
      break;
  }
})

const headers = new Headers({
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin": "*"
}); 

const searchForm = new FormData(document.getElementById("search-id") as HTMLFormElement)
console.log(searchForm)
async function searchPatientById(searchForm:FormData) {
  try {
    const response = await fetch("https://www.google.com", {
      method: "POST",
      body: searchForm,
      headers: headers 
    })
    const foundPatients = await response.json()
    console.log("Success:", foundPatients)
  } catch(error) {
    console.error(error)
  }
}

searchPatientById(searchForm)

type patientSummary = {
  name : {
    firstName: string,
    lastName: string,
  },
  gender: string,
  dateOfBirth: string,
  idType: string,
  idValue: string 
}

const umeDetails = {
  "name" : {
    "firstName": "Ume",
    "lastName": "Hani",
  },
  "gender": "Female",
  "dateOfBirth": "11/03/1993",
  "idType": "Aadhar Card",
  "idValue": "ZKUP38U"
}

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


const searchResult: patientSummary[] = [umeDetails, barunDetails] 
function getIdInput() {
  const inputText = searchInput.value;
  return inputText
}

function matchId(idText: string) {
  for (const patient of searchResult) {
    if (patient.idValue == idText) {
      return patient
    }
  }
}

const resultsContainer = document.getElementById("results-container") as HTMLDivElement
const searchButton = document.getElementById("search") as HTMLButtonElement
searchButton.addEventListener("click", (e) => {
  const resultTable = resultsContainer.querySelector("#results-container > table")
  console.log(resultTable)
  if (resultTable != null) {
    resultsContainer.removeChild(resultTable)
  }
  const table = document.createElement("table")
  const headerRow = table.insertRow(0)
  headerRow.classList.add("header-row")
  const nameCell = headerRow.insertCell(0)
  const genderCell = headerRow.insertCell(1)
  const dateOfBirth = headerRow.insertCell(2)
  const idType = headerRow.insertCell(3)
  const idValue = headerRow.insertCell(4)

  nameCell.innerHTML = "Name"
  genderCell.innerHTML = "Gender"
  dateOfBirth.innerHTML = "Date of Birth"
  idType.innerHTML = "ID Type"
  idValue.innerHTML = "ID Value"

  const idInput = getIdInput() 
  const patient = matchId(idInput)
  if (patient != null) {
    for (let i=1; i <=1; i++) {
      const row = table.insertRow(i)
      const nameCell = row.insertCell(0)
      const genderCell = row.insertCell(1)
      const dateOfBirth = row.insertCell(2)
      const idType = row.insertCell(3)
      const idValue = row.insertCell(4)

      nameCell.innerHTML = `${patient.name.firstName} ${patient.name.lastName}`
      genderCell.innerHTML = `${patient.gender}`
      dateOfBirth.innerHTML = `${patient.dateOfBirth}`
      idType.innerHTML = `${patient.idType}`
      idValue.innerHTML = `${patient.idValue}`
    }

    resultsContainer.appendChild(table)
  }
})