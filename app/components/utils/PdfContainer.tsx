import Link from "next/link"
import styles from "../styles/PdfContainer.module.css"

export default function PdfContainer({ defaultPdfUrl }: {defaultPdfUrl: string}) {
  
        //{/* <a href={defaultPdf}>You can maximize</a> */}
  return (
    <div>
      <object className={styles.pdfViewer} title="pdfViewer" data={defaultPdfUrl} type="application/pdf"></object>
      <Link href={defaultPdfUrl} target="_blank">
        <button className={styles.openPdfTab}>Maximize</button>
      </Link>
    </div>
    
  )
} 