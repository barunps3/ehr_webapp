import React from "react";
import styles from './styles/HeaderContent.module.css'
import { PAGENAME } from "../utils/constants";

function HeaderWithOnlyName() {
  return (
    <>
      <div>
        <img className={styles.companyIcon} src="/ehr.png" alt="ehr icon" />
      </div>
      <div>
        <h3 className={styles.companyName}>Baum Electronic Health Records</h3>
      </div>
    </>
  )
}

export default function HeaderContent({ pageName }: {pageName: PAGENAME}) {
  if (pageName === PAGENAME.LoginPage) {
    return ( 
      <HeaderWithOnlyName />
    )
  }
  return <HeaderWithOnlyName />
}