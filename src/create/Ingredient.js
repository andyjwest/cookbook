import React from 'react'
import LabeledInput from './LabeledInput'
import {IngredientShape} from "../PropTypeShapes";
import LabeledField from "./LabeledField";
import unitTypes from "../unitTypes";

export default function Ingredient({name, amount, madeInStep, preparation, onChange}) {

    const setName = (e) => onChange({name: e.target.value, amount, madeInStep, preparation})
    const setAmount = (e) => onChange({name, amount, madeInStep, preparation})
    const setMadeInStep = (e) => onChange({name, amount, madeInStep: e.target.value, preparation})
    const setPreparation = (e) => onChange({name, amount, madeInStep, preparation: e.target.value})


    return <li>
        <h3>{name}</h3>
        <LabeledInput label='Name' inputType='text' value={name} onChange={setName}/>
        <h4>Amount</h4>
        <LabeledInput label='value' inputType='number' onChange={(e)=> {
        }}/>
        <LabeledField label='Units'>
            <select onChange={()=> {}}>
                {unitTypes.sort().map(it => <option>{it}</option>)}
            </select>
        </LabeledField>
    </li>
}

Ingredient.propTypes = {
    ...IngredientShape,

}
