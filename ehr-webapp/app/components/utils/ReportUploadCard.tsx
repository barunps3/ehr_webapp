import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import styles from "../styles/ReportUploadOverview.module.css"
import ImageGallery from "./ImageGallery"

const inputFileExt = {
  "xRay": ".jpg, .jpeg, .png",
  "mriScan": ".jpg, .jpeg, .png",
  "bloodTest": ".pdf"
}

export default function ReportUploadCard() {
  const hiddenFileInput = useRef<HTMLInputElement>(null)
  const [selectedReportType, setSelectedReportType] = useState("")
  const [selectedFiles, setSelectedFiles] = useState<FileList>()
  const [fileDataUrls, setFileDataUrls] = useState<Array<string>>([])

  let acceptedInputFileExt = ""

  function handleReset() {
    setSelectedReportType("")
    setSelectedFiles(undefined)
    setFileDataUrls([])
  }

  function handleFormSubmission(e: React.FormEvent) {
    e.preventDefault()
  }
  // useEffect as file reading is async
  useEffect(() => {
    let imageList: string[] = []
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        const reader = new FileReader()
        reader.onload = (e) =>{
          const imgSrc = e.target?.result
          if (typeof(imgSrc) === 'string') {
            imageList.push(imgSrc)
          }
          // When reading the last img has finished, update component state
          if (i === (selectedFiles.length - 1)) {
            setFileDataUrls(imageList)
          }
        }
        reader.readAsDataURL(selectedFiles[i])
      }
    }
  }, [selectedFiles])

  function handleInputFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const fileList = e.currentTarget.files
    if (fileList) {
      setSelectedFiles(fileList)
    }
  }

  function handleSelection(e: React.MouseEvent<HTMLButtonElement>) {
    const selectedBtn = e.currentTarget.id

    switch (selectedBtn) {
      case "xRay":
        acceptedInputFileExt = inputFileExt["xRay"]
        setSelectedReportType("xRay")
        console.log("xray was selected", acceptedInputFileExt)
        break
      case "mriScan":
        setSelectedReportType("mriScan")
        acceptedInputFileExt = inputFileExt["mriScan"]
        console.log("mriScan was selected")
        break
      case "bloodTest":
        setSelectedReportType("bloodTest")
        acceptedInputFileExt = inputFileExt["mriScan"]
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
      <div className={styles.previewContainer}>
        {fileDataUrls.length ? <ImageGallery defaultImages={fileDataUrls} />: <></>}
      </div>

      <div className={styles.fileTypeSelector}>
        <button id="xRay" 
          disabled={selectedFiles && selectedReportType !== "xRay" ? true : false}
          onClick={handleSelection}
          type="button">
            X-Rays (*.png/.jpg/.jpeg)
        </button>
        <button id="mriScan"
          disabled={selectedFiles && selectedReportType !== "mriScan" ? true : false}
          onClick={handleSelection}
          type="button">
            MRI Scans (*.png/.jpg/.jpeg)
        </button>
        <button id="bloodTest"
          disabled={selectedFiles && selectedReportType !== "bloodTest" ? true : false} 
          onClick={handleSelection} 
          type="button">
            Blood Test (*.pdf)
        </button>
      </div>

      <form onSubmit={handleFormSubmission} className={styles.uplodImagesForm}>
        <div className={styles.addComments}>
          <label htmlFor="commentToUpload">Your Comments:</label><br />
          <textarea name="commentToUpload" id="commentToUpload" rows={4}></textarea>
        </div>

        <div className={styles.uploadFunction}>
          <input 
            type="file"
            id="file" style={{ display: "none" }}
            ref={hiddenFileInput}
            onChange={handleInputFileChange}
            name="file" multiple />
          <button type="submit">Upload</button>
          <button onClick={handleReset} type="submit">Reset</button>
        </div>
      </form>
    </div>
  )
}