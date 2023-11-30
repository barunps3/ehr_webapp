import Image from "next/image"
import styles from "./styles/PatientReportViewCard.module.css"

function ImageGallery() {
  return (
    <>
      <div className={styles.fullImage}>
        <Image 
          src="/localImages/lumbar-spine-front.png"
          alt="lumbar-spine-front"
          fill={true}
          // width={200}
          // height={200}
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
    <ImageGallery />
  )
}