import React, {useState} from 'react'
import LabeledInput from './LabeledInput'
import {IngredientShape, StepShape} from "../PropTypeShapes";
import LabeledField from "./LabeledField";
import {number, shape, string} from "prop-types";

export default function Ingredient({name, amount, madeInStep, preparation, onChange}) {

    // const [tempName, setName] = useState(name)
    // const [tempAmount, setAmount] = useState(amount)
    // const [tempMadeInStep, setMadeInStep] = useState(madeInStep)
    // const [tempPreparation, setPreparation] = useState(preparation)

    const setName = (e) => {
       onChange()
    }

    return <li>
        <LabeledInput label='Name' inputType='text' onChange={setName}/>
        <h4>Amount</h4>

        <LabeledInput label='value' inputType='number' onChange={(e)=> {
        }}/>
        <LabeledField label='Units'>
            <select>

            </select>
        </LabeledField>
        units: string

    </li>
}

Ingredient.propTypes = IngredientShape
