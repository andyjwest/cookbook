import React from 'react';
import './step.scss';
import MetadataBar from './MetadataBar'
import {StepShape} from "../../../PropTypeShapes";
import IngredientList from "../../IngredientList";
import {number} from "prop-types";

export default function Step({title, equipment, temperature, description, ingredients, time, priorStepRequired, index}) {

    return (
        <div className='step'>
            <h3>Step {index+1}{title && `: ${title}`}</h3>
            <div className='ingredients'>{!!ingredients && <IngredientList ingredients={ingredients} />}</div>
            <div className='description'>{description.split('.').map(it => <p>{it}</p>)}</div>
            <MetadataBar equipment={equipment} temperature={temperature} time={time} />
        </div>
    );
}

Step.propTypes = {
    ...StepShape,
    index: number.isRequired
}
