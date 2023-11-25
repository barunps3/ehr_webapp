'use client'
import React, {useState} from "react";
import { useForm } from "react-hook-form"
import styles from "./styles/EnterPatient.module.css"
import { PatientFormData } from "../utils/dataTypes";
import { GENDER, HOSPITALDEPT, NATIONALID } from "../utils/constants";
import {v4 as uuidv4} from 'uuid';


let emptyFormData: PatientFormData = {
  FirstName: "",
  LastName: "",
  Gender: GENDER.Male,
  DateOfBirth: "",
  InsuranceId: "",
  PhoneNum: "",
  EmergencyPhoneNum: "",
  Address: "",
  NationalIDType: NATIONALID.AadharCard,
  NationalIDValue: "",
  PatientUUID: uuidv4(),
  InPatient: false,
  CurrentDept: HOSPITALDEPT.GenPhysician,
  Comments: ""
}

let markedInput: Record<keyof PatientFormData, boolean> = {
  FirstName: false,
  LastName: false,
  Gender: false,
  DateOfBirth: false,
  PhoneNum: false,
  EmergencyPhoneNum: false,
  Address: false,
  NationalIDType: false,
  NationalIDValue: false,
  PatientUUID: false,
  InsuranceId: false,
  InPatient: false,
  CurrentDept: false,
  Comments: false
}

type entryFormInput = {
  isEditMode?: boolean,
  data?: PatientFormData
}

export default function PatientEntryForm({ isEditMode = false, data }: entryFormInput) {
  
  const [editedInputs, setEditedInput] = useState(markedInput)

  let defaultData: PatientFormData = emptyFormData
  if (data) defaultData = data
   
  function textChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const targetName = e.target.name as keyof PatientFormData
    const targetValue = e.target.value

    if (defaultData) {
      if (defaultData[targetName] != targetValue) {
        markedInput[targetName] = true
        setEditedInput({...markedInput})
      } else {
        markedInput[targetName] = false
        setEditedInput({...markedInput})
      }
    }
  }

  function changeToEditStyle(editedInputName: keyof PatientFormData) {
    if (markedInput[editedInputName]) return {border: '1px solid red'} 
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
            defaultValue={defaultData.FirstName}/>
        </div>
        <div>
          <label>Last Name</label><br />
          <input name="LastName" type="text" 
            style={changeToEditStyle("LastName")} 
            onChange={textChange} defaultValue={defaultData.LastName}/>
        </div>
        <div>
          <label>Phone Number</label><br />
          <input name="PhoneNum" type="text" 
            style={changeToEditStyle("PhoneNum")} 
            onChange={textChange} defaultValue={defaultData.PhoneNum}/>
        </div>
        <div>
          <label>Emergency Contact Number</label><br />
          <input name="EmergencyPhoneNum" type="text" 
            style={changeToEditStyle("EmergencyPhoneNum")} 
            onChange={textChange} defaultValue={defaultData.EmergencyPhoneNum}/>
        </div>
        <div className={styles.genderSelector}>
          <label>Select Gender</label><br />
          <select name="Gender" id="Gender" 
            style={changeToEditStyle("Gender")} 
            onChange={textChange} defaultValue={defaultData.Gender}>
            <option value={GENDER.Male}>Male</option>
            <option value={GENDER.Female}>Female</option>
            <option value={GENDER.Other}>Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label><br />
          <input name="DateOfBirth" 
            type="date" style={changeToEditStyle("DateOfBirth")} 
            onChange={textChange} defaultValue={defaultData.DateOfBirth}/>
        </div>
        <div className={styles.addressContainer}>
          <label>Address</label><br />
          <textarea name="Address" id="address" placeholder="Address" 
            style={changeToEditStyle("Address")} onChange={textChange} 
            defaultValue={defaultData.Address}></textarea>
        </div>
      </fieldset>

      <fieldset className={styles.hospitalInfofieldset}>
        <legend>Hospital Information</legend>
        <div>
          <label>Patient ID</label><br />
          <input name="PatientUUID" type="text" disabled defaultValue={defaultData.PatientUUID} />
        </div>
        <div>
          <label>National ID</label><br />
          <div className={styles.idSelectorContainer}>
            <select style={changeToEditStyle("NationalIDType")} 
              onChange={textChange} defaultValue={defaultData.NationalIDType} name="NationalIDType" required>
              <option value="" disabled>ID Type</option>
              <option value={NATIONALID.AadharCard}>Aadhar Card</option>
              <option value={NATIONALID.Passport}>Passport</option>
            </select>
            <input type="search" name="NationalIDValue" 
              style={changeToEditStyle("NationalIDValue")} onChange={textChange} 
              defaultValue={defaultData.NationalIDValue} placeholder="NationalIDValue" required />
          </div>
        </div>
        <div>
          <label>Insurance Number</label><br />
          <input name="InsuranceId" type="text" style={changeToEditStyle("InsuranceId")} 
          onChange={textChange} defaultValue={defaultData.InsuranceId}/>
        </div>

        <div id={styles.departmentSelector}>
          <label>Select Current Department</label><br />
          <select name="CurrentDept" style={changeToEditStyle("CurrentDept")} 
          onChange={textChange} id="departmentSelected" defaultValue={defaultData.CurrentDept}>
            <option value={HOSPITALDEPT.Orthopaedic}>Orthopaedic</option>
            <option value={HOSPITALDEPT.GenPhysician}>General Physician</option>
            <option value={HOSPITALDEPT.Cancer}>Cancer</option>
            <option value={HOSPITALDEPT.Radiology}>Radiology</option>
            <option value={HOSPITALDEPT.Gynecologist}>Gynecologist</option>
          </select>
        </div>

        <div>
          <input type="checkbox" className={styles.inPatientCheckbox} style={changeToEditStyle("InPatient")} 
            onChange={textChange} id="inPatient" name="InPatient" />
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