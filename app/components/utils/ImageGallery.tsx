import Image from "next/image"
import styles from '../styles/ImageGallery.module.css'
import { MouseEventHandler } from 'react'
import { useState, useRef, useEffect } from "react"


type imageMaximizer = {
  show: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  isMaximized: boolean
}

export function ImageMaximizer({ show, onClick, isMaximized}: imageMaximizer) {
  return (
    <button className={styles.imageMaximizer}
      onClick={onClick}
      style={show ? {display: 'block'} : {display: 'none'}}>
      { isMaximized ? 'Minimize' : 'Maximize'} 
    </button>
  )
}

export default function ImageGallery({ defaultImages }: { defaultImages: string[]}) {
  const [ selectedImage, setMainImage ] = useState(defaultImages[0])
  // console.log("default main image:", mainImage)
  const [ showImgMaximizer, setShowImgMaximizer ] = useState(false)
  const imageGallery = useRef<HTMLDivElement>(null)
  const [ inFullscreenMode, setScreenMode ] = useState(false)
  console.log("infullscreen?", inFullscreenMode)

  function handleSelectImg(selectedImageId: number) {
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
    <div className={styles.imageGallery} ref={imageGallery}>
      <div className={styles.mainImage}
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
      <div className={styles.thumbBar}>
        {defaultImages.map((image, index) => {
          return (
            <div key={index} className={styles.thumbBox}>
              <Image src={image}
                onClick={() => handleSelectImg(index)}
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
