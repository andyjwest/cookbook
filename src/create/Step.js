import React, {useState} from 'react'
import {
    HeatStringTypes,
    IngredientShape,
    StepShape,
    TemperatureShape,
    TimeShape,
    TimeUnitTypes
} from "../PropTypeShapes";
import LabeledField from "./LabeledField";
import Ingredient from "./Ingredient";
import {
    Button, Checkbox,
    FormControl,
    FormControlLabel,
    InputLabel, MenuItem,
    OutlinedInput,
    RadioGroup, Select,
    TextField
} from "@material-ui/core";
import {useStyles} from "./Create";
import {arrayOf, bool, func, oneOf, oneOfType, shape, string} from "prop-types";
import Time from "./time/Time";
import Temperature from "./temp/Temperature";

export default function Step(
    {
        title,
        description,
        ingredients,
        time,
        priorStepRequired,
        equipment,
        temperature,
        index,
        updateStep
    }) {
    const classes = useStyles();

    const setStepValue = (field, value) => {
        updateStep(field)({target: {value: value}})
    }

    const updateNestedObject = parentField => field => event => {
        let fakeEvent = {target: {value: {...time}}}
        fakeEvent.target.value[field] = event.target.value
        updateStep(parentField)(fakeEvent)
    }

    const addIngredientHandler = () => {
        let newIngredients = []
        if(ingredients){
            newIngredients.push(ingredients)
        }
        newIngredients.push({})
        updateStep('ingredients')({target: {value: newIngredients}})
    }

    const updateIngredient = (index, field) => event => {
        let newIngredients = [...ingredients]
        newIngredients[index][field] = event.target.value
        updateStep('ingredients')({target: {value: newIngredients}})
    }

    return <div>
        <h2>Step {index + 1}{title && `: ${title}`}</h2>
        <TextField label='Title' variant='outlined' value={title} onChange={updateStep('title')}/>
        <FormControlLabel
            control={<Checkbox checked={priorStepRequired} onChange={updateStep('priorStepRequired')}/>}
            label="Prior Step Required"
        />
        <FormControl fullWidth variant='outlined'>
            <InputLabel htmlFor="outlined-adornment-amount">Description</InputLabel>
            <OutlinedInput
                id='description' label='Description' labelWidth={60} value={description}
                onChange={updateStep('description')} className={classes.margin} rows={4} multiline/>
        </FormControl>
        <h3>Ingredients</h3>
        {ingredients && ingredients.map((it, index) => <Ingredient {...it} index={index} key={index}
                                                                   onChange={field => updateIngredient(index, field)}/>)}
        <Button onClick={addIngredientHandler}>Add Ingredient</Button>

        {time ? <Time {...time} index={index} updateTime={updateNestedObject('time')}/> :
            <Button onClick={() => setStepValue('time', {})}>Add Time</Button>}
        {temperature ? <Temperature {...temperature} index={index}
                                    updateTime={updateNestedObject('temperature')}/> :
            <Button onClick={() => setStepValue('temperature', {})}>Add Temperature</Button>}

    </div>
}

Step.propTypes = {
    equipment: arrayOf(string),
    temperature: oneOfType([shape(TemperatureShape), oneOf(HeatStringTypes)]),
    title: string,
    description: string,
    ingredients: arrayOf(shape(IngredientShape)),
    time: shape(TimeShape),
    priorStepRequired: bool,
    updateStep: func
}

//FIXME should i really set these to empty objects/arrays?
Step.defaultProps = {
    priorStepRequired: false,
}