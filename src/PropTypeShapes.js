import {string, number, shape, arrayOf, oneOf, oneOfType, bool} from "prop-types";

export const HeatStringTypes = ["High", "Medium-High", "Medium", "Medium-Low", "Low"]

export const IngredientShape = {
    name: string.isRequired,
    amount: shape({
        value: number,
        units: string
    }),
    madeInStep: number,
    preparation: string
}

export const TimeShape = {
    value: number,
    lowerBound: number,
    upperBound: number,
    units: string.isRequired
}

export const TemperatureShape = {
        value: number,
        lowerBound: number,
        upperBound: number,
        units: string.isRequired
    }

export const StepShape = {
    equipment: arrayOf(string),
    temperature: oneOfType([shape(TemperatureShape), oneOf(HeatStringTypes)]),
    title: string,
    description: string.isRequired,
    ingredients: arrayOf(shape(IngredientShape)),
    time: shape(TimeShape),
    priorStepRequired: bool,
}

export const RecipeShape = {
    title: string.isRequired,
    id: string.isRequired,
    description: string,
    source: string,
    yields: string,
    steps:  arrayOf(shape(StepShape)),
    titleImage: string
}
