import React from "react";
import {number, bool} from "prop-types";
import {StepShape} from "../../PropTypeShapes";
import './sidebar-step.scss'
import {NavLink} from "react-router-dom";

export default function Step({index, step, active=false}){
    return <NavLink className='sidebar-step' to={{
     hash: `#step-${index+1}`
    }} activeClassName='active'>
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
