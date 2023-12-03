'use client'
import Image from "next/image"
import styles from "./styles/PatientReportViewCard.module.css"
import { useState } from "react"

function ImageGallery({ defaultImages }: {defaultImages: string[]}) {
  const [ mainImage, setMainImage ] = useState(defaultImages[0])

  function handleClick(selectedImageId: number) {
    setMainImage(defaultImages[selectedImageId])
  }

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
        {defaultImages.map((image, index) => {
          return (
            <div key={index} className={styles.thumbBox}>
              <Image src={image}
                onClick={() => handleClick(index)}
                alt="lumbar-spine-left"
                fill={true}
              />
            </div>
          )
        })}
        
        {/* <div className={styles.thumbBox}>
          <Image src="/localImages/lumbar-spine-front.png"
            onClick={handleClick}
            alt="lumbar-spine-left"
            fill={true}
          />
        </div> */}
      </div>
    </>
  )
}

const testImages = [
  "/localImages/lumbar-spine-front.png",
  "/localImages/lumbar-spine-side.png"
]

export default function PatientReportViewCard() {
return (
    <ImageGallery defaultImages={testImages}/>
  )
}