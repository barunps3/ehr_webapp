import { useRef, useState } from "react"
import styles from "../styles/ReportUploadOverview.module.css"

const inputFileExt = {
  "xRay": ".jpg, .jpeg, .png",
  "mriScan": ".jpg, .jpeg, .png",
  "bloodTest": ".pdf"
}

export default function ReportUploadCard() {
  const [selectedReportType, setSelectedReportType] = useState("")
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  let acceptedInputFileExt = ""

  function handleSelection(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedBtn = e.currentTarget.id

    switch (selectedBtn) {
      case "xRay":
        if (selectedReportType === "xRay") {
          setSelectedReportType("")
        } else {
          acceptedInputFileExt = inputFileExt["xRay"]
          setSelectedReportType("xRay")
          console.log("xray was selected", acceptedInputFileExt)
        }
        break
      case "mriScan":
        if (selectedReportType === "mriScan") {
          setSelectedReportType("")
        } else {
          setSelectedReportType("mriScan")
          acceptedInputFileExt = inputFileExt["mriScan"]
        }
        console.log("mriScan was selected")
        break
      case "bloodTest":
        if (selectedReportType === "bloodTest") {
          setSelectedReportType("bloodTest")
        } else {
          setSelectedReportType("bloodTest")
          acceptedInputFileExt = inputFileExt["mriScan"]
        }
        console.log("bloodTest was selected")
        break
      default:
        console.log("nothing is selected")
    }

    if (hiddenFileInput.current) {
      console.log("accepted file input:", acceptedInputFileExt)
      hiddenFileInput.current.setAttribute("accept", acceptedInputFileExt)
      console.log("input triggered", hiddenFileInput.current.getAttribute("accept"))
      hiddenFileInput.current.click()
    }
  }


  return (
    <div className={styles.reportUploadContainer}>
      <div className={styles.previewContainer}></div>

      <div className={styles.fileTypeSelector}>
        <button id="xRay" disabled={selectedReportType === "xRay" || selectedReportType === "" ? false : true} onClick={handleSelection} type="button">X-Rays (*.png/.jpg/.jpeg)</button>
        <button id="mriScan" disabled={selectedReportType === "mriScan" || selectedReportType === "" ? false : true} onClick={handleSelection} type="button">MRI Scans (*.png/.jpg/.jpeg)</button>
        <button id="bloodTest" disabled={selectedReportType === "bloodTest" || selectedReportType === "" ? false : true } onClick={handleSelection} type="button">Blood Test (*.pdf)</button>
      </div>

      <form className={styles.uplodImagesForm}>
        <div className={styles.addComments}>
          <label htmlFor="commentToUpload">Your Comments:</label><br />
          <textarea name="commentToUpload" id="commentToUpload" rows={3}></textarea>
        </div>

        <div className={styles.uploadFunction}>
          <input 
            type="file"
            id="file" style={{ display: "none" }}
            ref={hiddenFileInput}
            name="file" multiple />
          <button type="submit">Upload</button>
          <button type="submit">Reset</button>
        </div>
      </form>
    </div>
  )
}