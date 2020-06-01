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
            <div>
                {!!ingredients && <TextWithHeader header='Ingredients'>
                    <IngredientList ingredients={ingredients} />
                </TextWithHeader>}
                <TextWithHeader header='Description'>{description}</TextWithHeader>
            </div>
            {(!!temperature || !!time || !!equipment) && <MetadataBar temperature={temperature} equipment={equipment} time={time}/>}
        </div>
    );
}

Step.propTypes = StepShape
