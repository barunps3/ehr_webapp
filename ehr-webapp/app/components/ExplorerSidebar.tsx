import { ReportFiles } from '../utils/dataTypes'
import { DefaultFolderName } from '../utils/defaults'
import styles from './styles/ExplorerSidebar.module.css'
import RecordFolder from './utils/RecordFolder'

type ExplorerSideBar = {
  reportFiles: ReportFiles
  setShowXray: React.Dispatch<React.SetStateAction<boolean>>
}

let testFolders = {
  "X-Rays": {
    "2023": {
      "March": ["2023_03_11", "2023_03_27"],
      "Jan": ["2023_01_19", "2023_01_20"]
    },
    "2022": {
      "September": ["2022_11_01", "2022_11_21"]
    }
  }
}

type monthFolder = {
  [key: string]: string[]
}

type yearFolder = {
  [key: string]: monthFolder
}

function generateFolderStructure(reports: string[]) {
  const yearFolder: yearFolder = {}
  console.log("reports:", reports)
  for (const uploadDateStr of reports) {
    console.log("uploadDateString", uploadDateStr)
    const uploadDate = new Date(uploadDateStr)
    console.log("uploadDate Datetime", uploadDate)
    const year = uploadDate.getFullYear().toString()
    console.log(year)
    const month = uploadDate.toLocaleString('en-us', { month: 'long' });
    console.log(month)

    if (year in yearFolder) {
      if (month in yearFolder[year]) {
        yearFolder[year][month].push(uploadDateStr)
      }

      yearFolder[year][month] = [uploadDateStr]
    }
    else {
      const monthFolder: monthFolder = {}
      monthFolder[month] = [uploadDateStr]
      yearFolder[year] = monthFolder
    }
  }
  return yearFolder
}

export default function ExplorerSideBar({ reportFiles, setShowXray }: ExplorerSideBar) {
  const xrayFolders = generateFolderStructure(reportFiles["Xrays"])

  return (
    <div className={styles.explorerSidebar}>
      <RecordFolder folderName="X-Rays" folderContent={xrayFolders} showRecord={setShowXray} />
    </div>
  )
}