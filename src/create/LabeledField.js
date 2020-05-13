import React from 'react'
import './LabledInput.scss'

export default function LabeledField(props){
  return <div className='labeledInputContainer'>
    <label>{props.label}</label>
    {props.children}
  </div>
}
