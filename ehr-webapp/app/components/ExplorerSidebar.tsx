import styles from './styles/ExplorerSidebar.module.css'
import RecordFolder from './RecordFolder'

type ExplorerSideBar = {
  setShowXray: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ExplorerSideBar({ setShowXray }: ExplorerSideBar) {
  return (
    <div className={styles.sidebar}>
      <RecordFolder displayFileHandler={setShowXray}/>
    </div>
  )
}