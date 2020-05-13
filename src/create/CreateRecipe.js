import React, { useState } from 'react'
import LabeledInput from './LabeledInput'
import CreateStep from './CreateStep'
import LabeledField from "./LabeledField";

export default function CreateRecipe(){
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [steps, setSteps] = useState([])

  return <div>
    <LabeledInput label='Title' inputType='text' changeHandler={setTitle} value={title}/>
    <LabeledInput label='ID' inputType='text' changeHandler={setId} value={id}/>
    <LabeledField label='Description'>
      <textarea onChange={e => setDescription(e.target.value)}>{description}</textarea>
    </LabeledField>
    <LabeledInput label='Yield' inputType='text'/>
    <button onClick={()=>{
      setSteps({})
    }}>Add Step</button>
    {steps.map(step=> <CreateStep {...step}/>)}
  </div>
}
