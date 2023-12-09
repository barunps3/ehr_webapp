import { ReportFiles } from '../utils/dataTypes'
import styles from './styles/ExplorerSidebar.module.css'
import RecordFolder from './utils/RecordFolder'

type ExplorerSideBar = {
  reportFiles: ReportFiles
  setShowXray: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExplorerSideBar({ reportFiles, setShowXray }: ExplorerSideBar) {
  return (
    <div className={styles.explorerSidebar}>
      <RecordFolder displayFileHandler={setShowXray}/>
    </div>
  )
}