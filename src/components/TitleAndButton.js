import TitleButton from './TitleButton'
import styles from './TitleAndButton.module.css'
import addCar from '../assets/addCar.svg'
import changeOwner from '../assets/changeOwner.svg'

function TitleAndButton({ openModal }) {
  return (
    <div className={styles.container}>
      <div className={styles.label}>
        <label className={styles.labelText}>Автомобили</label>
      </div>
      <div className={styles.titleButtonContainer}>
        <TitleButton img={changeOwner} title="Сменить владельца" />
        <TitleButton
          img={addCar}
          title="Добавить"
          onClick={() => {
            console.log('Button clicked')
            openModal()
          }}
        />
      </div>
    </div>
  )
}

export default TitleAndButton
