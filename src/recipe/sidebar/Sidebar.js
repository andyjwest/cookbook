import React from "react";
import Step from "./Step";
import './sidebar.scss'
import {NavLink} from "react-router-dom";

export default function Sidebar(props) {
    return <div className="sidebar">
        {props.titleImage && <img alt={props.title} src={props.titleImage} style={{width: 180, height: 120}}/>}
        <NavLink exact className='sidebar-step' activeClassName='active' to={`/recipes/${props.recipeId}`}>All Ingredients</NavLink>
        <div className='step-container'>
            {props.steps && props.steps.map((step, index) => <Step index={index} step={step}/>)}
        </div>
    </div>
}
