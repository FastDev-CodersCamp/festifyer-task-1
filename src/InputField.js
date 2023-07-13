import React from 'react'

export default function InputField({type,placeHolder}) {
  return (
    <input name={type} type={type} className='input-field' placeholder={placeHolder} />
  )
}
