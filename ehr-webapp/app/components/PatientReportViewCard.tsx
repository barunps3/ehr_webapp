'use client'
import Image from "next/image"
import styles from "./styles/PatientReportViewCard.module.css"
import ImageMaximizer from "./utils/ImageMaximizer"
import { useState, useRef } from "react"

function ImageGallery({ defaultImages }: {defaultImages: string[]}) {
  const [ mainImage, setMainImage ] = useState(defaultImages[0])
  const [ showImgMaximizer, setShowImgMaximizer ] = useState(false)
  const imageGallery = useRef<HTMLDivElement>(null)
  const [ inFullscreenMode, setScreenMode ] = useState(false)
  console.log("infullscreen?", inFullscreenMode)

  const mainImageStyle = inFullscreenMode ? styles.mainImageFullscreen : styles.mainImage
  const thumbBarStyle = inFullscreenMode ? styles.thumbBarFullscreen : styles.thumbBar

  function handleClick(selectedImageId: number) {
    setMainImage(defaultImages[selectedImageId])
  }

  function toggleFullScreen() {
    const imgGall = imageGallery.current
    if (imgGall) {
      if (!inFullscreenMode) {
        imgGall.requestFullscreen().catch((error) => {
          console.log("requesting full screen error:", error)
        })
      }
    } else {
      document.exitFullscreen().catch((error) => {
        console.log("exiting error:", error)
      })
    }
    setScreenMode(!inFullscreenMode)
  }

  return (
    <div ref={imageGallery}>
      <div className={mainImageStyle}
        onMouseEnter={() => setShowImgMaximizer(true)}
        onMouseLeave={() => setShowImgMaximizer(false)}>
        <ImageMaximizer show={showImgMaximizer}
          onClick={toggleFullScreen}
          isMaximized={inFullscreenMode} />
        <Image 
          src={mainImage}
          alt="lumbar-spine-front"
          fill={true}
          className={styles.image}
        />
      </div>
      <div className={thumbBarStyle}>
        {defaultImages.map((image, index) => {
          return (
            <div key={index} className={styles.thumbBox}>
              <Image src={image}
                onClick={() => handleClick(index)}
                alt="lumbar-spine-left"
                fill={true}
                className={styles.image}
              />
            </div>
          )
        })}
      </div>
    </div>
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