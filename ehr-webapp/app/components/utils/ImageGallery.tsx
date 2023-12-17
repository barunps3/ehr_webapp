import Image from "next/image"
import styles from '../styles/PatientReportViewCard.module.css'
import ImageMaximizer from "./ImageMaximizer"
import { useState, useRef, useEffect } from "react"

export default function ImageGallery({ defaultImages }: { defaultImages: string[]}) {
  const [ selectedImage, setMainImage ] = useState(defaultImages[0])
  // console.log("default main image:", mainImage)
  const [ showImgMaximizer, setShowImgMaximizer ] = useState(false)
  const imageGallery = useRef<HTMLDivElement>(null)
  const [ inFullscreenMode, setScreenMode ] = useState(false)
  console.log("infullscreen?", inFullscreenMode)

  const mainImageStyle = false ? styles.mainImageFullscreen : styles.mainImage
  const thumbBarStyle = false ? styles.thumbBarFullscreen : styles.thumbBar

  function handleClick(selectedImageId: number) {
    setMainImage(defaultImages[selectedImageId])
  }

  function toggleFullScreen() {
    const imgGall = imageGallery.current
    
    if (imgGall && !inFullscreenMode) {
      imgGall.requestFullscreen().catch((error) => {
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

  const handleFullscreenChange = () => {
    setScreenMode(!!document.fullscreenElement);
  };

  useEffect(() => {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
    };
  }, [inFullscreenMode]);

  return (
    <div className={styles.imageGallery} ref={imageGallery}>
      <div className={mainImageStyle}
        onMouseEnter={() => setShowImgMaximizer(true)}
        onMouseLeave={() => setShowImgMaximizer(false)}>
        <ImageMaximizer show={showImgMaximizer}
          onClick={toggleFullScreen}
          isMaximized={inFullscreenMode} />
        <Image 
          src={selectedImage}
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
