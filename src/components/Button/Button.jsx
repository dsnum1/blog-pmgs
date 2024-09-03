import React from 'react'
import './Button.css'

const Button = ({ onClick }) => {
  return (
    <button onClick={onClick} className="button">
      <p className="button-text">Learn More</p>
    </button>
  )
}

export default Button