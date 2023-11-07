import React from "react";
import styles from './HeaderContent.module.css'

export default function HeaderContent() {
  return (
    <>
      <div>
        <img className="company-icon" src="/ehr.png" alt="ehr icon" />
      </div>
      <div>
        <h3 className="company-name">Baum Electronic Health Records</h3>
      </div>
    </>
  )
}