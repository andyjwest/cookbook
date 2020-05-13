import React from 'react'
import LabeledField from "./LabeledField";

export default function LabeledInput(props){
  return <LabeledField label={props.label}>
    <input type={props.inputType} onChange={e => props.changeHandler(e.target.value)} value={props.value}/>
  </LabeledField>
}
