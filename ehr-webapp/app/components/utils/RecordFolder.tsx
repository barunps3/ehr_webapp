'use client'
import { useState } from "react"
import styles from '../styles/RecordFolder.module.css'

type File = {
  fileName: string,
  isHighlighted: boolean,
  setHighlighting: React.Dispatch<React.SetStateAction<string>>,
  displayFileHandler: React.Dispatch<React.SetStateAction<string>>
}


function File({ fileName,
  isHighlighted,
  setHighlighting,
  displayFileHandler }: File) {

  function highlightFile(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    if (isHighlighted) {
      setHighlighting("")
      displayFileHandler("")
      console.log(`"" was unselected`)
    } else {
      setHighlighting(fileName)
      console.log(`${fileName} was selected`)
      displayFileHandler(fileName)
    }
  }

  return (
    <div 
      className={isHighlighted ? styles.selectedFile : styles.folderOrFile}
      onClick={highlightFile}>
        {fileName}
    </div>
  )
}

type folderContent = {
  [key: string]: Array<string> | folderContent
}

type recordFolder = {
  folderName: string,
  folderContent: folderContent,
  showRecord: React.Dispatch<React.SetStateAction<string>>
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


export default function RecordFolder({
    folderName="X-Rays",
    folderContent=testFolders["X-Rays"],
    showRecord
  }: recordFolder) {

  const [isExpanded, setExpansion] = useState(false) 
  const [highlightedFile, setHighlightedFile] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setExpansion(!isExpanded)
  }
  
  if (Array.isArray(folderContent)) {
    return (
      <>
        <div onClick={handleClick} className={styles.folderOrFile}>{folderName}</div>
        <div style={isExpanded ? {display: 'block', paddingLeft: "10px"} : {display: 'none'}}>
          {folderContent.map((fileName, index) => {
            if (typeof fileName === 'string') {
              return <File 
                key={index}  
                fileName={fileName}
                isHighlighted={highlightedFile == fileName}
                setHighlighting={setHighlightedFile}
                displayFileHandler={showRecord} />
            }
          })}
        </div>
      </>
    )
  }

  const childFolders = Object.keys(folderContent)
  return (
    <>
      <div onClick={handleClick}  className={styles.folderOrFile}>{folderName}</div>
      <div style={isExpanded ? {display: 'block', paddingLeft: "15px"} : {display: 'none'}} onClick={handleClick}>
        {childFolders.map((folderName, index) => {
          return <RecordFolder
            key={index}
            folderName={folderName}
            folderContent={folderContent[folderName] as folderContent}
            showRecord={showRecord} />
          }
        )}
      </div>
    </>
  )
}