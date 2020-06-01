import React from 'react';
import './step.scss';
import MetadataBar from './MetadataBar'
import {StepShape} from "../../../PropTypeShapes";
import IngredientList from "../../IngredientList";
import Header from "./Header";
import TextWithHeader from "../../../components/TextAreaWithHeader/TextWithHeader";

export default function Step({title, equipment, temperature, description, ingredients, time, priorStepRequired}) {

    return (
        <div className='step'>
            {!!ingredients && <TextWithHeader header='Ingredients'>
                <IngredientList ingredients={ingredients} />
            </TextWithHeader>}
            <TextWithHeader header='Description'>{description}</TextWithHeader>
            {(!!temperature || !!time || !!equipment) && <div>
                <TextWithHeader header='Equipment'>{equipment}</TextWithHeader>
                <div>
                    {!!temperature && <TextWithHeader header='Temp'>{temperature.value}</TextWithHeader>}
                    {!!time && <TextWithHeader header='Time'>{time.value}</TextWithHeader>}
                </div>
            </div>}
        </div>
    );
}

Step.propTypes = StepShape
