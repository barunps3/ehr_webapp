'use client'
import React from "react";
import { IDSelector } from "./SearchCard";
import { useForm } from "react-hook-form"
import styles from "./EnterPatient.module.css"

export default function PatientEntryForm() {
  const {register,
  handleSubmit,
  formState: {errors}} = useForm()

  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.basicInfofieldSet}>
        <legend>Basic Information</legend>
        <div>
          <label>First Name</label><br />
          <input name="firstName" type="text" />
        </div>
        <div>
          <label>Last Name</label><br />
          <input name="lastName" type="text" />
        </div>
        <div>
          <label>Phone Number</label><br />
          <input name="phoneNumber" type="text" />
        </div>
        <div>
          <label>Emergency Contact Number</label><br />
          <input name="emergencyPhoneNumber" type="text" />
        </div>
        <div className={styles.addressContainer}>
          <label>Address</label><br />
          <textarea name="address" id="address" placeholder="Address"></textarea>
        </div>
      </fieldset>

      <fieldset className={styles.hospitalInfofieldset}>
        <legend>Hospital Information</legend>
        <div>
          <label>Patient ID</label><br />
          <input name="autoPatientId" type="autoPatientId" disabled defaultValue="a3245-2345" />
        </div>
        <div>
          <label>National ID</label><br />
          <div className={styles.idSelectorContainer}>
            <select className="" defaultValue="" name="idType" required>
              <option value="" disabled>ID Type</option>
              <option value="aadhar-card">Aadhar Card</option>
              <option value="passport">Passport</option>
            </select><input type="search" id="patient_id" name="patientId" placeholder="ID value" required />
        </div>

        </div>

        <div className={styles.genderSelector}>
          <label>Select Gender</label><br />
          <select name="sex" id="sex">
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Intersex</option>
          </select>
        </div>

        <div>
          <label>Insurance Number</label><br />
          <input name="insuranceNumber" type="insuranceNumber" />
        </div>

        <div id={styles.departmentSelector}>
          <label>Select Current Department</label><br />
          <select name="departmentSelector" id="departmentSelected">
            <option value="ortho">Orthopaedic</option>
            <option value="ortho">General Physician</option>
            <option value="female">Cancer</option>
            <option value="other">Radiology</option>
            <option value="other">Gynecologist</option>
          </select>
        </div>

        <div>
          <input type="checkbox" className={styles.inPatientCheckbox} id="inPatient" name="inPatient" />
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