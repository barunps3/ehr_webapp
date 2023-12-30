'use client'
import React, {useState} from "react";
import { useForm } from "react-hook-form"
import styles from "./styles/EnterPatient.module.css"
import { PatientFormData } from "../utils/dataTypes";
import { CARETYPE, GENDER, HOSPITALDEPT, NATIONALID } from "../utils/constants";
import { DefaultPatientFormData } from "../utils/defaults";

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
  let defaultData: PatientFormData = DefaultPatientFormData
  if (data) defaultData = data
  
  const [editedInputs, setEditedInput] = useState(markedInput)
  const {
    register,
    handleSubmit,
    reset,
    getValues,
  } = useForm({defaultValues: data})
  console.log(defaultData)
   
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
          <input {...register("FirstName")}
            style={changeToEditStyle("FirstName")} 
            type="text" onChange={textChange} 
            defaultValue={defaultData.FirstName}/>
        </div>
        <div>
          <label>Last Name</label><br />
          <input {...register("LastName")}
            type="text" 
            style={changeToEditStyle("LastName")} 
            onChange={textChange} defaultValue={defaultData.LastName}/>
        </div>
        <div>
          <label>Phone Number</label><br />
          <input {...register("PhoneNum")}
            type="text" 
            style={changeToEditStyle("PhoneNum")} 
            onChange={textChange} defaultValue={defaultData.PhoneNum}/>
        </div>
        <div>
          <label>Emergency Contact Number</label><br />
          <input {...register("EmergencyPhoneNum")}
            type="text" 
            style={changeToEditStyle("EmergencyPhoneNum")} 
            onChange={textChange} defaultValue={defaultData.EmergencyPhoneNum}/>
        </div>
        <div className={styles.genderSelector}>
          <label>Select Gender</label><br />
          <select {...register("Gender")}
            id="Gender" 
            style={changeToEditStyle("Gender")} 
            onChange={textChange} defaultValue={defaultData.Gender}>
            <option value={GENDER.Male}>Male</option>
            <option value={GENDER.Female}>Female</option>
            <option value={GENDER.Other}>Other</option>
          </select>
        </div>
        <div>
          <label>Date of Birth</label><br />
          <input {...register("DateOfBirth")}
            type="date" style={changeToEditStyle("DateOfBirth")} 
            onChange={textChange} defaultValue={defaultData.DateOfBirth}/>
        </div>
        <div className={styles.addressContainer}>
          <label>Address</label><br />
          <textarea {...register("Address")}
            id="address" placeholder="Address" 
            style={changeToEditStyle("Address")} onChange={textChange} 
            defaultValue={defaultData.Address}></textarea>
        </div>
      </fieldset>

      <fieldset className={styles.hospitalInfofieldset}>
        <legend>Medical Information</legend>
        <div>
          <label>Patient ID</label><br />
          <input {...register("PatientUUID")}
            type="text" disabled defaultValue={defaultData.PatientUUID} />
        </div>
        <div>
          <label>National ID</label><br />
          <div className={styles.idSelectorContainer}>
            <select 
              {...register("NationalIDType")}
              style={changeToEditStyle("NationalIDType")} 
              onChange={textChange}
              // defaultValue={defaultData.NationalIDType}
              required>
              <option value="" disabled>ID Type</option>
              <option value={NATIONALID.AadharCard}>Aadhar Card</option>
              <option value={NATIONALID.Passport}>Passport</option>
            </select>
            <input {...register("NationalIDValue")}
              type="search"
              style={changeToEditStyle("NationalIDValue")} onChange={textChange} 
              defaultValue={defaultData.NationalIDValue} placeholder="NationalIDValue" required />
          </div>
        </div>
        <div>
          <label>Insurance Number</label><br />
          <input {...register("InsuranceId")}
            type="text" style={changeToEditStyle("InsuranceId")} 
            onChange={textChange} defaultValue={defaultData.InsuranceId}/>
        </div>

        <div id={styles.departmentSelector}>
          <label>Select Current Department</label><br />
          <select 
            {...register("CurrentDept")}
            style={changeToEditStyle("CurrentDept")} 
            onChange={textChange} id="departmentSelected" defaultValue={defaultData.CurrentDept}>
            <option value={HOSPITALDEPT.Orthopaedic}>Orthopaedic</option>
            <option value={HOSPITALDEPT.GenPhysician}>General Physician</option>
            <option value={HOSPITALDEPT.Cancer}>Cancer</option>
            <option value={HOSPITALDEPT.Radiology}>Radiology</option>
            <option value={HOSPITALDEPT.Gynecologist}>Gynecologist</option>
          </select>
        </div>

        <div>
          <input {...register("InPatient")}
            type="checkbox" className={styles.inPatientCheckbox} style={changeToEditStyle("InPatient")} 
            onChange={textChange} id="inPatient"
            checked={defaultData.InPatient == CARETYPE.InPatient}/>
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