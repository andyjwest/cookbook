import React from 'react';
import './step.scss';
import Equipment from './Equipment'
import {StepShape} from "../../PropTypeShapes";
import IngredientList from "../IngredientList";

export default function Step({equipment, temperature, description, ingredients, time, priorStepRequired}) {
    return (
        <div className='step'>
            <div>
                {!!equipment && <Equipment equipment={equipment}/>}
            </div>
            <IngredientList ingredients={ingredients} />
            <div>{description}</div>
        </div>
    );
}

Step.propTypes = StepShape
