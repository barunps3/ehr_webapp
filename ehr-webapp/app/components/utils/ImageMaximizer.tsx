import { MouseEventHandler } from 'react'
import styles from '../styles/ImageMaximizer.module.css'

type imageMaximizer = {
  show: boolean
  onClick: MouseEventHandler<HTMLButtonElement>
  isMaximized: boolean
}

export default function ImageMaximizer({ show, onClick, isMaximized}: imageMaximizer) {
  return (
    <button className={styles.imageMaximizer}
      onClick={onClick}
      style={show ? {display: 'block'} : {display: 'none'}}>
      { isMaximized ? 'Minimize' : 'Maximize'} 
    </button>
  )
}