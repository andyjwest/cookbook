import React, {useState} from 'react'
import {
    HeatStringTypes,
    IngredientShape,
    StepShape,
    TemperatureShape,
    TimeShape,
    TimeUnitTypes
} from "../PropTypeShapes";
import Ingredient from "./Ingredient";
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
        <input value={title} onChange={updateStep('title')}/>
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