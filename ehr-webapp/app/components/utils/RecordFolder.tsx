'use client'
import { useState } from "react"
import styles from '../styles/RecordFolder.module.css'

type folder = {
  folderName: string
  contents: Array<folder | string>
}

let folders = {
  folderName: "XRays",
  contents: [
    {
      folderName: "2023",
      contents: [
        {
          folderName: "March",
          contents: ["2023_03_11", "2023_03_27"],
        },
        {
          folderName: "April",
          contents: ["image_9.png", "image_10.png"]
        }
      ]
    },
    {
      folderName: "2022",
      contents: [
        {
          folderName: "September",
          contents: ["image_5.png", "image_6.png"],
        }
      ]
    }
  ]
}


function onlyFilesExist (folderContents: Array<folder | string>) {
  for (const content in folderContents) {
    if (typeof folderContents[content] != 'string') {
      return false
    }
  }
  return true
}

type File = {
  fileName: string,
  isHighlighted: boolean,
  setHighlighting: React.Dispatch<React.SetStateAction<string>>,
  displayFileHandler: React.Dispatch<React.SetStateAction<boolean>>
}


function File({ fileName,
  isHighlighted,
  setHighlighting,
  displayFileHandler }: File) {

  function highlightFile(e: React.MouseEvent<HTMLDivElement>) {
    e.stopPropagation()
    if (isHighlighted) {
      setHighlighting("")
      displayFileHandler(!isHighlighted)
    } else {
      setHighlighting(fileName)
      displayFileHandler(!isHighlighted)
    }
  }

  return (
    <div 
      className={isHighlighted ? styles.selectedFile : "unselected"}
      onClick={highlightFile}>
        {fileName}
    </div>
  )
}


type recordFolder = {
  folderName?: string,
  folderContent?: Array<folder | string>,
  displayFileHandler: React.Dispatch<React.SetStateAction<boolean>>
}

export default function RecordFolder({
    folderName = folders.folderName,
    folderContent=folders.contents,
    displayFileHandler
  }: recordFolder) {

  const [isExpanded, setExpansion] = useState(false) 
  const [highlightedFile, setHighlightedFile] = useState('')

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setExpansion(!isExpanded)
  }
  
  if (onlyFilesExist(folderContent)) {
    return (
      <>
        <div onClick={handleClick} className="heading">{folderName}</div>
        <div style={isExpanded ? {display: 'block', paddingLeft: "10px"} : {display: 'none'}}>
          {folderContent.map((fileName, index) => {
            if (typeof fileName === 'string') {
              return <File 
                key={index}  
                fileName={fileName}
                isHighlighted={highlightedFile == fileName}
                setHighlighting={setHighlightedFile}
                displayFileHandler={displayFileHandler} />
            }
          })}
        </div>
      </>
    )
  }

  return (
    <>
      <div onClick={handleClick}  className="heading">{folderName}</div>
      <div style={isExpanded ? {display: 'block', paddingLeft: "15px"} : {display: 'none'}} onClick={handleClick}>
        {folderContent.map((folder, index) => {
          if (typeof folder !== 'string') {
            return <RecordFolder
              key={index}
              folderName={folder.folderName}
              folderContent={folder.contents}
              displayFileHandler={displayFileHandler} />
          }}
        )}
      </div>
    </>
  )
}