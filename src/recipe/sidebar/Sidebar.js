import React from "react";
import './sidebar.scss'
import Ingredients from "./Ingredients";
import Button from "../../components/Button";
import {arrayOf, number, shape, string} from "prop-types";
import {StepShape} from "../../PropTypeShapes";

export default function Sidebar(props) {

    const pullOutFromSteps = (field) => props.steps.flatMap(step => step[field]).filter(it => typeof it !== 'undefined')

    return <div className="sidebar">
        {props.titleImage && <img alt={props.title} src={props.titleImage} style={{width: 180, height: 120}}/>}
        <Button onClick={()=>props.changeActiveStep(props.activeStep-1)}>Prior Step</Button>
        <div>Step {props.activeStep+1}</div>
        <Button onClick={()=>props.changeActiveStep(props.activeStep+1)}>Next Step</Button>
        <Ingredients ingredients={props.steps.flatMap(step => step.ingredients).filter(it => typeof it !== 'undefined' && typeof it.madeInStep === 'undefined')}/>
        <h2>Equipment</h2>
        <div>
            {Array.from(new Set(pullOutFromSteps('equipment'))).map(it => <div>{it}</div>)}
        </div>
    </div>
}

Sidebar.propTypes = {
    titleImage: string,
    title: string,
    activeStep: number,
    steps: arrayOf(shape(StepShape))
}