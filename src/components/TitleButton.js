import styles from './TitleButton.module.css'
import React from 'react'

export default function TitleButton({ title, img, onClick }) {
  return (
    <button className={styles.titleButton} onClick={onClick}>
      <img src={img} alt="" className={styles.img} />
      {title && <span>{title}</span>}
    </button>
  )
}
