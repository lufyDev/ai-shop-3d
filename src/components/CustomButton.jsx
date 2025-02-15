import React from 'react'
import { useSnapshot } from 'valtio'
import state from '../store'



const CustomButton = ({ type, title, handleClick, customStyles }) => {
  const snap = useSnapshot(state)

  const generateStyle = (type) => {
    return {
      backgroundColor: type === 'filled' ? snap.color : '',
      color: type === 'filled' ? '#fff' : '',
    }
  }

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md ${customStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  )
}

export default CustomButton