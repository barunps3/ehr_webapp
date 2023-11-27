import React from "react";
import styles from './styles/HeaderContent.module.css'
import { PAGENAME } from "../utils/constants";
import Link from "next/link";

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

function HeaderWithNav() {
  return (
    <div className={styles.navBar}>
      <div className={styles.rightAligned}>
        <img className={styles.companyIcon} src="/ehr.png" alt="ehr icon" />
        <div>
          <p id={styles.baum}>Baum</p>
          <p id={styles.ehr}>EHR</p>
        </div>
        <Link className="search" href="/search" target="_blank">
          <button id={styles.searchPageBtn} type="button">Search</button>
        </Link>
      </div>
      <div className="leftAligned">
        <div className={styles.userDropdown} data-dropdown>
          <button>
            <img src="/personCircle.svg" alt="Your Account" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function HeaderContent({ pageName }: {pageName: PAGENAME}) {
  if (pageName === PAGENAME.PatientHistory) {
    return ( 
      <HeaderWithNav />
    )
  }
  return <HeaderWithOnlyName />
}