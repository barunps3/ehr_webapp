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
  FirstName: false,
  LastName: false,
  PhoneNumber: false,
  EmergencyPhoneNumber: false,
  Gender: false,
  DateOfBirth: false,
  Address: false,
  IdType: false,
  IdValue: false,
  Id: false,
  InsuranceNumber: false,
  DepartmentSelector: false,
  Checkbox: false,
  Comments: false   
}


function changeToEditStyle(changedInputKey: string) {
  if (changedInput[changedInputKey]) {
    return {border: '1px solid red'}
  } 
  return {border: '1px solid gray'}
}

function matchesPreviousData(inputName: string, 
                              inputVal: string, 
                              data: searchResult | undefined) {
  if (data) {
    if (data[inputName] === inputVal) return true
  }
  return false
}


export default function PatientEntryForm({ isEditMode = false, data }: entryFormInput) {
  const [changedField, setChangedField] = useState(new Set<string>())
  let firstNameStyle = {border: '1px solid gray'}
  changedField.forEach(value => {changedInput[value] = true})
  console.log("changed field:", changedField)
  console.log("current style", changeToEditStyle("firstName"))
  
  function textChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    if (e.target.value === "") {
      return
    } 
    else if (matchesPreviousData(e.target.name, e.target.value, data)) {
      var currentChangedFields = new Set(changedField)
      currentChangedFields.delete(e.target.name)
      changedInput[e.target.name] = false
      console.log("entered else if:", currentChangedFields)
      setChangedField(currentChangedFields)
    } 
    else {
      var currentChangedFields = new Set(changedField)
      currentChangedFields.add(e.target.name)
      console.log("else:", currentChangedFields)
      setChangedField(currentChangedFields)
    }
  }

  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.basicInfofieldSet}>
        <legend>Basic Information</legend>
        <div>
          <label>First Name</label><br />
          <input name="FirstName" 
            style={changeToEditStyle("FirstName")} 
            type="text" onChange={textChange} 
            defaultValue={isEditMode ? data?.FirstName : ""}/>
        </div>
        <div>
          <label>Last Name</label><br />
          <input name="LastName" type="text" 
            style={changeToEditStyle("LastName")} 
            onChange={textChange} defaultValue={isEditMode ? data?.LastName : ""}/>
        </div>
        <div>
          <label>Phone Number</label><br />
          <input name="PhoneNum" type="text" 
            style={changeToEditStyle("PhoneNum")} 
            onChange={textChange} defaultValue={isEditMode ? data?.PhoneNum : ""}/>
        </div>
        <div>
          <label>Emergency Contact Number</label><br />
          <input name="EmergencyPhoneNum" type="text" 
            style={changeToEditStyle("EmergencyPhoneNum")} 
            onChange={textChange} defaultValue={isEditMode ? data?.EmergencyPhoneNum : ""}/>
        </div>
        <div className={styles.genderSelector}>
          <label>Select Gender</label><br />
          <select name="Gender" id="Gender" 
            style={changeToEditStyle("Gender")} 
            onChange={textChange} defaultValue={isEditMode ? data?.Gender: ""}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label><br />
          <input name="DateOfBirth" 
            type="date" style={changeToEditStyle("DateOfBirth")} 
            onChange={textChange} defaultValue={isEditMode ? data?.DateOfBirth : ""}/>
        </div>
        <div className={styles.addressContainer}>
          <label>Address</label><br />
          <textarea name="Address" id="address" placeholder="Address" 
            style={changeToEditStyle("Address")} onChange={textChange} 
            defaultValue={isEditMode ? data?.Address : ""}></textarea>
        </div>
      </fieldset>

      <fieldset className={styles.hospitalInfofieldset}>
        <legend>Hospital Information</legend>
        <div>
          <label>Patient ID</label><br />
          <input name="Id" type="autoPatientId" disabled 
            onChange={textChange} defaultValue={isEditMode ? data?.Id : "a3245-2345"} />
        </div>
        <div>
          <label>National ID</label><br />
          <div className={styles.idSelectorContainer}>
            <select className="" style={changeToEditStyle("IdType")} 
              onChange={textChange} defaultValue={isEditMode ? data?.IdType : ""} name="idType" required>
              <option value="" disabled>ID Type</option>
              <option value="aadharcard">Aadhar Card</option>
              <option value="passport">Passport</option>
            </select>
            <input type="search" id="patient_id" name="IdValue" 
              style={changeToEditStyle("IdValue")} onChange={textChange} 
              defaultValue={isEditMode ? data?.IdValue : ""} placeholder="ID value" required />
          </div>
        </div>
        <div>
          <label>Insurance Number</label><br />
          <input name="InsuranceId" type="text" style={changeToEditStyle("InsuranceId")} 
          onChange={textChange} defaultValue={isEditMode ? data?.InsuranceId : ""}/>
        </div>

        <div id={styles.departmentSelector}>
          <label>Select Current Department</label><br />
          <select name="departmentSelector" style={changeToEditStyle("departmentSelector")} 
          onChange={textChange} id="departmentSelected">
            <option value="ortho">Orthopaedic</option>
            <option value="ortho">General Physician</option>
            <option value="female">Cancer</option>
            <option value="other">Radiology</option>
            <option value="other">Gynecologist</option>
          </select>
        </div>

        <div>
          <input type="checkbox" className={styles.inPatientCheckbox} style={changeToEditStyle("inPatient")} 
            onChange={textChange} id="inPatient" name="inPatient" />
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