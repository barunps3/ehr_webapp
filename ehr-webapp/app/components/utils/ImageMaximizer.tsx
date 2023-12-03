import styles from '../styles/ImageMaximizer.module.css'

type imageMaximizer = {
  show: boolean
}

export default function ImageMaximizer({ show }: imageMaximizer) {
  return (
    <div className={styles.imageMaximizer}
      style={show ? {display: 'block'} : {display: 'none'}}>
      Maximize
    </div>
  )
}