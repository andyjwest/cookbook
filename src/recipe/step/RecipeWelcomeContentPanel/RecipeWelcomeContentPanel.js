import React from "react";
import Ingredients from "../../sidebar/Ingredients";
import {arrayOf, number, shape, string} from "prop-types";
import {StepShape} from "../../../PropTypeShapes";
import './recipe-welcome.scss'

export const RecipeWelcomeContentPanel = (props) => <div className='recipe-welcome'>
    <div className='content'>
        {(props.description || props.titleImage) && <div>
            {props.titleImage && <img alt={props.title} src={props.titleImage} style={{width: 400, height: 300}}/>}
            {props.description && <div>{props.description}</div>}
        </div>}
        <Ingredients
            ingredients={props.steps
                .flatMap(step => step.ingredients)
                .filter(it => typeof it !== 'undefined' && typeof it.madeInStep === 'undefined')}/>

        <div>
            <h2>Equipment</h2>
            <div>
                {Array.from(new Set(props.steps
                    .flatMap(step => step.equipment)
                    .filter(it => typeof it !== 'undefined')))
                    .map(it => <div>{it}</div>)}
            </div>
        </div>
    </div>
    <div>
        <div><a href={props.source}>Link to Source</a></div>
    </div>
</div>

RecipeWelcomeContentPanel.propTypes = {
    description: string,
    titleImage: string,
    title: string,
    steps: arrayOf(shape(StepShape))
}