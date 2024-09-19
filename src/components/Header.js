import styles from './Header.module.css'
import ImageButtonHeader from './ImageButtonHeader'
import Logo from './Logo'
import ButtonMenu from './ButtonMenu'
import car from '../assets/iconCar2.png'
import map from '../assets/IconMap2.png'
import charge from '../assets/IconCharge2.png'
import company from '../assets/IconCompany2.png'
import logo from '../assets/logo1.png'
import profile from '../assets/Profile.png'
import exit from '../assets/exit.png'

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.topSection}>
        <Logo href="/car" src={logo} />
        <div className={styles.buttonContainer}>
          <ImageButtonHeader href="/car" src={car} />
          <ImageButtonHeader href="/map" src={map} />
          <ImageButtonHeader href="/charge" src={charge} />
          <ImageButtonHeader href="/company" src={company} />
        </div>
      </div>
      <div className={styles.bottomSection}>
        <ButtonMenu img={profile} />
        <ButtonMenu img={exit} />
      </div>
    </div>
  )
}
