import React, { useState } from 'react'
import styles from './Cars.module.css'
import TableCars from '../components/TableCars'
import TitleAndButton from '../components/TitleAndButton'
import ButtonHeaderBody from '../components/ButtonHeaderBody.jsx'
import ModalAddCar from '../components/ModalAddCar.js'

export default function Cars() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => {
    console.log('Open modal')
    setIsModalOpen(true)
  }
  const closeModal = () => {
    console.log('clouse Modal')
    setIsModalOpen(false)
  }
  return (
    <div className={styles.carsBody}>
      <ButtonHeaderBody />
      <div className={styles.containerTab}>
        <TitleAndButton openModal={openModal} />
        <TableCars />
      </div>
      {isModalOpen && <ModalAddCar onClouse={closeModal} />}
    </div>
  )
}
