import React from 'react'

export default function LabeledInput(props){
  return <div>
    <label>{props.label}</label>
    <input type={props.inputType} onChange={e => props.changeHandler(e.target.value)} value={props.value}/>
  </div>
}