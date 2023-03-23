import React, { useState } from 'react'

export default function Squre({value, handleClick}) {
  return (
    <button className="square" onClick={handleClick}>
      {value}
    </button>
  )
}
