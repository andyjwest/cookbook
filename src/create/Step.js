import React, {useState} from 'react'
import LabeledInput from './LabeledInput'
import {StepShape} from "../PropTypeShapes";
import LabeledField from "./LabeledField";
import Ingredient from "./Ingredient";

export default function Step(
    {
        title,
        description,
        ingredients,
        time,
        priorStepRequired,
        equipment,
        temperature,
        index
    }) {

    const [tempTitle, setTitle] = useState(title)
    const [tempDescription, setDescription] = useState(description)
    const [tempIngredients, setIngredients] = useState(!!ingredients ? ingredients : [])
    const [tempTime, setTime] = useState(time)

    return <div>
        <h2>Step {index+1}</h2>
        <LabeledInput label='Title' inputType='text' changeHandler={setTitle} value={tempTitle}/>
        <LabeledField label='Description'>
            <textarea onChange={e => setDescription(e.target.value)}>{tempDescription}</textarea>
        </LabeledField>
        <h3>Ingredients</h3>
        <ol>
            {tempIngredients.map(ingredient => <Ingredient {...ingredient} onChange={()=>{}} />)}
        </ol>
        <button onClick={()=> setIngredients(tempIngredients.concat([{}]))}>Add Ingredient</button>
        <LabeledField label='Time' />
    </div>
}

Step.propTypes = StepShape
