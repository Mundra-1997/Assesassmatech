import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Button.css'
const Button = () => {
    const navigate = useNavigate()
    const handleclick =()=>{
        navigate('/')
    }
  return (
    <div>
      <button onClick={handleclick}>Home Page</button>
    </div>
  )
}

export default Button
