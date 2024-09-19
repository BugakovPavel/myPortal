import styles from './ButtonMenu.module.css'

export default function ButtonMenu({ img }) {
  return (
    <button className={styles.buttonBottom}>
      <img src={img} alt="Button" />
    </button>
  )
}
