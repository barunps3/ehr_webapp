import React, { useState } from "react";
import HeaderContent from "../components/HeaderContent";
import PatientOverview from "../components/PatientOverview";
import './patientHistory.css'
import { PAGENAME } from "../utils/constants";

function BasicInfoBar(){
  return (
  <div className="patientInfoBar">
    <div><p>Name: Ume Hani</p></div>
    <div><p>Age: 30</p></div>
    <div><p>Sex: Female</p></div>
    <div><p>Inpatient: Yes</p></div>
    <div><p>ID: ZKUP38U (Aadhar Card)</p></div>
  </div>
  )
}

export default function AddPatientPage() {

  return (
    <>
      <header className="header">
        <div className="company-header dark-blue">
          <HeaderContent pageName={PAGENAME.PatientHistory}/>
        </div>
        <div className="company-header light-blue"></div>
      </header>

      <div className="content">
          <BasicInfoBar />
          <PatientOverview />
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}