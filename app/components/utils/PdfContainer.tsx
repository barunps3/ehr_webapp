import Link from "next/link"
import styles from "../styles/PdfContainer.module.css"
import { useState, useEffect, useRef } from "react"

export default function PdfContainer({ defaultPdfUrl }: {defaultPdfUrl: string}) {
  const [ inFullscreenMode, setScreenMode ] = useState(false)
  const pdfContainer = useRef<HTMLDivElement>(null)

  function toggleFullScreen() {
    const pdfCont =  pdfContainer.current
    
    if (pdfCont && !inFullscreenMode) {
      pdfCont.requestFullscreen().catch((error) => {
        console.log("requesting full screen error:", error)
      })
    } else {
      console.log('exiting fullscreen')
      document.exitFullscreen().catch((error) => {
        console.log("exiting error:", error)
      })
    }
    setScreenMode(!inFullscreenMode)
  }

  function handleFullscreenChange() {
    setScreenMode(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [inFullscreenMode]);


  return (
    <div ref={pdfContainer} className={styles.pdfContainer}>
      <object
        className={styles.pdfViewer}
        title="pdfViewer"
        data={defaultPdfUrl}
        type="application/pdf">
      </object>
      <button className={styles.openPdfTab} onClick={toggleFullScreen}>Maximize</button>
    </div>
    
  )
} 