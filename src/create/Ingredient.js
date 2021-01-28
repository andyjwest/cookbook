import React from 'react'
import {IngredientShape} from "../PropTypeShapes";
import unitTypes from "../unitTypes";
import {FormControl, InputLabel, MenuItem, Select, TextField} from "@material-ui/core";

export default function Ingredient({name, amount, madeInStep, preparation, onChange, index}) {

    const handleAmountChange = field => event => {
        let fakeEvent = {target: {value: {...amount}}}
        fakeEvent.target.value[field] = event.target.value
        onChange('amount')(fakeEvent)
    }

    return <li>
        <TextField label='Name' variant='outlined' value={name}
                   onChange={onChange('name')}/>
        <TextField label='Amount' variant='outlined' value={name}
                   onChange={handleAmountChange('value')}/>
        <FormControl variant="outlined">
            <InputLabel id={`step-${index}-time-unit-label`}>Units</InputLabel>
            <Select
                labelId={`step-${index}-time-unit-label`}
                id={`step-${index}-time-units`}
                value={amount && amount.units}
                onChange={handleAmountChange('units')}
            >
                <MenuItem value="">
                    <em>None</em>
                </MenuItem>
                {unitTypes.map(type => <MenuItem key={type} value={type}>{type}</MenuItem>)}
            </Select>
        </FormControl>
    </li>
}

Ingredient.propTypes = {
    ...IngredientShape,

}
