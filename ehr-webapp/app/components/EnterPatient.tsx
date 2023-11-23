'use client'
import React, {useState} from "react";
import { useForm } from "react-hook-form"
import styles from "./styles/EnterPatient.module.css"
import { searchResult } from "./SearchCard";

type entryFormInput = {
  isEditMode?: boolean,
  data?: searchResult 
}

let changedInput: { [key: string]: boolean } = {
  firstName: false,
  lastName: false,
  phoneNumber: false,
  emergencyPhoneNumber: false,
  gender: false,
  dateOfBirth: false,
  address: false,
  idType: false,
  patientId: false,
  insuranceNumber: false,
  departmentSelector: false,
  checkbox: false,
  comments: false   
}


function changeToEditStyle(changedInputKey: string) {
  if (changedInput[changedInputKey]) {
    return {border: '1px solid red'}
  } 
  return {border: '1px solid gray'}
}


export default function PatientEntryForm({ isEditMode = false, data }: entryFormInput) {
  const [changedField, setChangedField] = useState(new Set<string>())
  let firstNameStyle = {border: '1px solid gray'}
  changedField.forEach(value => {changedInput[value] = true})
  console.log("changed field:", changedField)
  console.log("current style", changeToEditStyle("firstName"))
  
  function textChange(e) {
    if (e.target.value === "") {
      console.log("in if block")
    } else {
      var currentChangedFields = new Set(changedField)
      console.log("in else block")
      currentChangedFields.add(e.target.name)
      firstNameStyle = {border: '1px solid red'}
      setChangedField(currentChangedFields)
      console.log("in else block end ")
    }
  }

  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.basicInfofieldSet}>
        <legend>Basic Information</legend>
        <div>
          <label>First Name</label><br />
          <input name="firstName" 
            style={changeToEditStyle("firstName")} 
            type="text" onChange={textChange} 
            defaultValue={isEditMode ? data?.FirstName : ""}/>
        </div>
        <div>
          <label>Last Name</label><br />
          <input name="lastName" type="text" 
            style={changeToEditStyle("lastName")} 
            onChange={textChange} defaultValue={isEditMode ? data?.LastName : ""}/>
        </div>
        <div>
          <label>Phone Number</label><br />
          <input name="phoneNumber" type="text" 
            style={changeToEditStyle("phoneNumber")} 
            onChange={textChange} defaultValue={isEditMode ? data?.PhoneNum : ""}/>
        </div>
        <div>
          <label>Emergency Contact Number</label><br />
          <input name="emergencyPhoneNumber" type="text" 
            style={changeToEditStyle("emergencyPhoneNumber")} 
            onChange={textChange} defaultValue={isEditMode ? data?.EmergencyPhoneNum : ""}/>
        </div>
        <div className={styles.genderSelector}>
          <label>Select Gender</label><br />
          <select name="gender" id="gender" style={changeToEditStyle("gender")} onChange={textChange} defaultValue={isEditMode ? data?.Gender: ""}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label><br />
          <input name="dateOfBirth" type="date" style={changeToEditStyle("dateOfBirth")} onChange={textChange} defaultValue={isEditMode ? data?.DateOfBirth : ""}/>
        </div>
        <div className={styles.addressContainer}>
          <label>Address</label><br />
          <textarea name="address" id="address" placeholder="Address" style={changeToEditStyle("address")} onChange={textChange} defaultValue={isEditMode ? data?.Address : ""}></textarea>
        </div>
      </fieldset>

      <fieldset className={styles.hospitalInfofieldset}>
        <legend>Hospital Information</legend>
        <div>
          <label>Patient ID</label><br />
          <input name="autoPatientId" type="autoPatientId" disabled onChange={textChange} defaultValue={isEditMode ? data?.Id : "a3245-2345"} />
        </div>
        <div>
          <label>National ID</label><br />
          <div className={styles.idSelectorContainer}>
            <select className="" style={changeToEditStyle("idType")} onChange={textChange} defaultValue={isEditMode ? data?.IdType : ""} name="idType" required>
              <option value="" disabled>ID Type</option>
              <option value="aadharcard">Aadhar Card</option>
              <option value="passport">Passport</option>
            </select>
            <input type="search" id="patient_id" name="patientId" style={changeToEditStyle("patientId")} onChange={textChange} defaultValue={isEditMode ? data?.IdValue : ""} placeholder="ID value" required />
          </div>
        </div>
        <div>
          <label>Insurance Number</label><br />
          <input name="insuranceNumber" type="text" style={changeToEditStyle("insuranceNumber")} onChange={textChange} defaultValue={isEditMode ? data?.InsuranceId : ""}/>
        </div>

        <div id={styles.departmentSelector}>
          <label>Select Current Department</label><br />
          <select name="departmentSelector" style={changeToEditStyle("departmentSelector")} onChange={textChange} id="departmentSelected">
            <option value="ortho">Orthopaedic</option>
            <option value="ortho">General Physician</option>
            <option value="female">Cancer</option>
            <option value="other">Radiology</option>
            <option value="other">Gynecologist</option>
          </select>
        </div>

        <div>
          <input type="checkbox" className={styles.inPatientCheckbox} style={changeToEditStyle("inPatient")} onChange={textChange} id="inPatient" name="inPatient" />
          <label htmlFor="inPatient">In Patient</label>
        </div>
      </fieldset>
      <fieldset className={styles.additionalRemarks}>
        <legend>Additional Remarks</legend>
        <textarea name="comments" id="addRemarks"></textarea>
      </fieldset>
      <div>
        <button className={styles.btn} id="submitPatient" type="submit">Submit</button>
        <button className={styles.btn} id="savePatient" type="button">Save</button>
      </div>
    </form>
  )
}