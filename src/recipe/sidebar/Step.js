import React from "react";
import {number, bool} from "prop-types";
import {StepShape} from "../../PropTypeShapes";
import './sidebar-step.scss'
import {NavLink} from "react-router-dom";
import {useParams} from "@reach/router";

export default function Step({index, step, active=false}){

    // const {recipeId} = useParams()
    const recipeId = 'key-lime-pie'

    return <NavLink className='sidebar-step' to={`/recipes/${recipeId}/steps/${index}`} activeClassName='active'>
        <h1>{index + 1}</h1><div>{step.title ? step.title : step.description}</div>
        {step.ingredients && <div>{step.ingredients.map((ingredient, i) => {
            return i + 1 === step.ingredients.length ? ingredient.name : `${ingredient.name}, `
        })}</div>}
        {active && <div>

        </div>}
    </NavLink>
}

Step.propTypes ={
    index : number.isRequired,
    step: StepShape,
    active: bool}
