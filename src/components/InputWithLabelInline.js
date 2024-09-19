import React from 'react'
import styles from './InputWithLabelInline.module.css'

export default function InputWithLabelInline({
  textLabel,
  placeholder,
  options,
}) {
  return (
    <div className={styles.inputContainerInline}>
      <label
        htmlFor="inputField"
        className={styles.labelInline}
        textLabel={textLabel}
      >
        {textLabel}
      </label>
      {options ? (
        <select className={styles.selectModal}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <input
          id="inputField"
          placeholder={placeholder}
          className={styles.inputInline}
        />
      )}
    </div>
  )
}
