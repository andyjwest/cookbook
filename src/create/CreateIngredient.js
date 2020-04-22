import React, { useState } from 'react'
import LabeledInput from './LabeledInput'

export default function CreateStep(props){
  const [name, setName] = useState('')
  const [madeInStep, setMadeInStep] = useState('')
  const [amount, setAmount] = useState({value: 0, units: 'grams'})

  return <div>
    <LabeledInput label='Name' inputType='text' changeHandler={setName} value={name}/>
    <LabeledInput label='Amount' inputType='number' changeHandler={setAmount} value={amount.value}/>
    <LabeledInput label='Amount' inputType='text' changeHandler={setAmount} value={amount.units}/>
    <LabeledInput label='Made In Step' inputType='number' changeHandler={setMadeInStep} value={madeInStep}/>
  </div>
}