'use client'
import { useState } from "react"

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
          contents: ["image_1.png", "image_2.png"],
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

let singleFolder = {
    folderName: "April",
    contents: ["image_9.png", "image_10.png"]
  }


function onlyFilesExist (folderContents: Array<folder | string>) {
  for (const content in folderContents) {
    if (typeof folderContents[content] != 'string') {
      return false
    }
  }
  return true
}

let doubleFolder = {
    folderName: "April",
    contents: [
      // "file1.png",
      {
        folderName: "March",
        contents: ["image_1.png", "image_2.png"],
      }
    ]
}

type recordFolder = {
  folderName?: string,
  folderContent?: Array<folder | string>,
}

export default function RecordFolder({
  folderName = folders.folderName,
  folderContent=folders.contents,
  }: recordFolder) {

  const [isExpanded, setExpansion] = useState(false) 
  console.log(folderName, isExpanded)
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
              return <div className="files" key={index}>{fileName}</div>
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
              folderContent={folder.contents} />
          }}
        )}
      </div>
    </>
  )
}