import React from 'react'
import PropTypes from 'prop-types'

export default function Logo({
  src,
  href,
  alt = 'Button Image',
  onClick = () => {},
}) {
  return (
    <a href={href} onClick={onClick}>
      <img src={src} alt={alt} />
    </a>
  )
}

Logo.propTypes = {
  src: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  alt: PropTypes.string,
  onClick: PropTypes.func,
}
