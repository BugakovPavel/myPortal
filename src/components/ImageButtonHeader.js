import React from 'react'
import PropTypes from 'prop-types'
import styles from './ImageButtonHeader.module.css'

export default function ImageButtonHeader({
  src,
  href,
  alt = 'Button Image',
  onClick = () => {},
}) {
  return (
    <a href={href} onClick={onClick} className={styles.container}>
      <img src={src} alt={alt} />
    </a>
  )
}

ImageButtonHeader.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
}
