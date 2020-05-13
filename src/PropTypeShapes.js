import * as PropTypes from "prop-types";

export const IngredientShape = {
    name: PropTypes.string.isRequired,
    amount: PropTypes.shape({
        value: PropTypes.number,
        units: PropTypes.string
    }),
    madeInStep: PropTypes.number
}

export const TimeShape = {
    value: PropTypes.number,
    lowerBound: PropTypes.number,
    upperBound: PropTypes.number,
    units: PropTypes.string.isRequired
}

export const TemperatureShape = {
    value: PropTypes.number,
    lowerBound: PropTypes.number,
    upperBound: PropTypes.number,
    units: PropTypes.string.isRequired
}

export const StepShape = {
    equipment: PropTypes.arrayOf(PropTypes.string),
    temperature: PropTypes.shape(TemperatureShape),
    title: PropTypes.string,
    description: PropTypes.string.isRequired,
    ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientShape)),
    time: PropTypes.shape(TimeShape),
    priorStepRequired: PropTypes.bool,
}

export const RecipeShape = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    description: PropTypes.string,
    source: PropTypes.string,
    yields: PropTypes.string,
    steps:  PropTypes.arrayOf(PropTypes.shape(StepShape)),
    titleImage: PropTypes.string
}
