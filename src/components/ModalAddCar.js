import React from 'react'
import styles from './ModalAddCar.module.css'
import clouse from '../assets/clouse.png'
import InputWithLabelInline from './InputWithLabelInline'

export default function ModalAddCar({ onClouse }) {
  return (
    <div className={styles.modal}>
      <div className={styles.modalWrapper}>
        <div className={styles.modalContent}>
          <button className={styles.modalCloseButton} onClick={onClouse}>
            <img src={clouse} alt="Clouse" className={styles.clouseIcon} />
          </button>
          <div className={styles.inputDiv}>
            <InputWithLabelInline
              textLabel="Модель:"
              options={[
                'Не выбрано',
                'I-Pro',
                'I-Joy',
                'I-Space',
                'I-Jet',
                'I-Sky',
              ]}
            />
            <InputWithLabelInline
              textLabel="Установлен отопитель:"
              options={['Не выбрано', 'Да', 'Нет']}
            />
            <InputWithLabelInline
              textLabel="Ready доступен:"
              options={['Не выбрано', 'Да', 'Нет']}
            />
            <InputWithLabelInline
              textLabel="Вшитый ключ:"
              options={['Не выбрано', 'Да', 'Нет']}
            />
            <InputWithLabelInline
              textLabel="Год выпуска:"
              placeholder="Не указано"
            />
            <InputWithLabelInline textLabel="Цвет:" placeholder="Не указано" />
            <InputWithLabelInline
              textLabel="Гос номер:"
              placeholder="Не указано"
            />
            <InputWithLabelInline textLabel="IMEI:" placeholder="Не указано" />
            <InputWithLabelInline textLabel="VIN:" placeholder="Не указано" />
            <InputWithLabelInline
              textLabel="ICC симкарты:"
              placeholder="Не указано"
            />
            <InputWithLabelInline
              textLabel="Номер сим:"
              placeholder="Не указано"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
