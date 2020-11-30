import React, { useState } from 'react'
import LabeledInput from './LabeledInput'
import Step from './Step'
import LabeledField from "./LabeledField";

export default function Recipe(){
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [steps, setSteps] = useState([])

  return <div>
    <h1>Recipe</h1>
    <LabeledInput label='Title' inputType='text' changeHandler={setTitle} value={title}/>
    <LabeledInput label='ID' inputType='text' changeHandler={setId} value={id}/>
    <LabeledField label='Description'>
      <textarea onChange={e => setDescription(e.target.value)}>{description}</textarea>
    </LabeledField>
    <LabeledInput label='Yield' inputType='text'/>
    {steps.map((step, index )=> <Step {...step} index={index} key={index}/>)}
    <button onClick={()=>{
      setSteps(steps.concat([{}]))
    }}>Add Step</button>
    <button onClick={()=>{
      console.log("Send to Server")
    }}>Save</button>
  </div>
}
