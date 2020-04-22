import React, { useState } from 'react'
import LabeledInput from './LabeledInput'
import CreateStep from './CreateStep'

export default function CreateRecipe(props){
  const [title, setTitle] = useState('')
  const [id, setId] = useState('')
  const [description, setDescription] = useState('')
  const [steps, setSteps] = useState([])

  return <div>
    <LabeledInput label='Title' inputType='text' changeHandler={setTitle} value={title}/>
    <LabeledInput label='ID' inputType='text' changeHandler={setId} value={id}/>
    <div>
      <label>Description</label><textarea onChange={e => setDescription(e.target.value)}>{description}</textarea>
    </div>
    <LabeledInput label='Yield' inputType='text'/>
    {steps.map(step=> <CreateStep {...step}/>)}
  </div>
}