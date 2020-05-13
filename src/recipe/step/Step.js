import React from 'react';
import './step.scss';
import Ingredients from './Ingredients';
import * as PropTypes from 'prop-types';
import Equipment from './Equipment'
import {StepShape} from "../../PropTypeShapes";

export default function Step({equipment, temperature, description, ingredients, time, priorStepRequired}) {
    console.log(description)
    return (
        <div className='step'>
            <div>{description}</div>
            <Ingredients ingredients={ingredients}/>
            <div>
                {!!equipment && <Equipment equipment={equipment}/>}
            </div>
        </div>
    );
}

Step.propTypes = StepShape
