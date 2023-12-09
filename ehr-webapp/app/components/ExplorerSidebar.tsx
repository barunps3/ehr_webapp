import styles from './styles/ExplorerSidebar.module.css'
import RecordFolder from './utils/RecordFolder'

type ExplorerSideBar = {
  setShowXray: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExplorerSideBar({ setShowXray }: ExplorerSideBar) {
  return (
    <div className={styles.explorerSidebar}>
      <RecordFolder displayFileHandler={setShowXray}/>
    </div>
  )
}