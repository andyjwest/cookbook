import React from "react";
import Step from "./Step";
import './sidebar.scss'
import {Link} from "react-router-dom";
import Ingredients from "./Ingredients";
import Button from "../../components/Button";

export default function Sidebar(props) {
    return <div className="sidebar">
        {props.titleImage && <img alt={props.title} src={props.titleImage} style={{width: 180, height: 120}}/>}
        <Button>Prior Step</Button>
        <div>Step {props.activeStep}</div>
        <Button>Next Step</Button>
        <Ingredients ingredients={props.steps.flatMap(step => step.ingredients).filter(it => typeof it !== 'undefined' && typeof it.madeInStep === 'undefined')}/>
    </div>
}
