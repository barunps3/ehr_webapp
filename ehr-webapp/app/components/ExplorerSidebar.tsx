import styles from './styles/ExplorerSidebar.module.css'
import RecordFolder from './RecordFolder'

export default function ExplorerSideBar() {
  return (
    <div className={styles.sidebar}>
      <RecordFolder />
    </div>
  )
}