import React from "react";
import HeaderContent from "../components/HeaderContent";
import ExplorerSideBar from "../components/ExplorerSidebar";
import PatientOverview from "../components/PatientOverview";
import './patientHistory.css'
import { PAGENAME } from "../utils/constants";


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
          <ExplorerSideBar />
          <div className="verticalLine"></div>
          <PatientOverview />
      </div>

      <footer className="footer">
        <div className="light-blue"></div>
        <div className="dark-blue"></div>
      </footer>
    </>
  )
}