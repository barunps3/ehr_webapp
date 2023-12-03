'use client'
import Image from "next/image"
import styles from "./styles/PatientReportViewCard.module.css"
import { useState } from "react"

function ImageGallery({ defaultImage }: {defaultImage: string}) {
  const [ mainImage, setMainImage ] = useState(defaultImage)
  return (
    <>
      <div className={styles.fullImage}>
        <Image 
          src={mainImage}
          alt="lumbar-spine-front"
          fill={true}
        />
      </div>
      <div className={styles.thumbBar}>
        <Image src="/localImages/lumbar-spine-side.png"
          alt="lumbar-spine-left"
          fill={true}
        />
      </div>
    </>
  )
}

export default function PatientReportViewCard() {
return (
    <ImageGallery defaultImage="/localImages/lumbar-spine-front.png"/>
  )
}