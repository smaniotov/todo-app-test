import React from 'react'
import './button-style.css'

const Button = ({color, children}) => (
  <div>
    <button className={`${color}`}>
      {children}
    </button>
  </div>
)

export default Button