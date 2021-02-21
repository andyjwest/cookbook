import React from 'react'
import {IngredientShape} from "../PropTypeShapes";
import unitTypes from "../unitTypes";

export default function Ingredient({name, amount, madeInStep, preparation, onChange, index}) {

    const handleAmountChange = field => event => {
        let fakeEvent = {target: {value: {...amount}}}
        fakeEvent.target.value[field] = event.target.value
        onChange('amount')(fakeEvent)
    }

    return <li>
        <input label='Name' variant='outlined' value={name}
                   onChange={onChange('name')}/>
        <input label='Amount' variant='outlined' value={name}
                   onChange={handleAmountChange('value')}/>
            <label id={`step-${index}-time-unit-label`}>Units</label>
            <select
                labelId={`step-${index}-time-unit-label`}
                id={`step-${index}-time-units`}
                value={amount && amount.units}
                onChange={handleAmountChange('units')}
            >
                {unitTypes.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
    </li>
}

Ingredient.propTypes = {
    ...IngredientShape,

}
