import React from 'react';
import './step.scss';
import {StepShape} from "../../../PropTypeShapes";
import IngredientList from "../../IngredientList";
import {number} from "prop-types";
import Tag from "../../../components/tag/Tag";
import Amount from "../../../components/Amount/Amount";
import EquipmentList from "./EquipmentList";

export default function Step({title, equipment, temperature, description, ingredients, time, priorStepRequired, index}) {

    return (
        <div className='w3-container'>
            <div className='w3-container'>
                <h3>Step {index+1}{title && `: ${title}`}</h3>
            </div>
            <div className='w3-row-padding'>
                <div className='w3-col m3 l3'>{<IngredientList ingredients={ingredients} />}</div>
                <div className='w3-col w3-right' style={{width: '150px'}}>
                    <Tag color='grey'>{time && <Amount value={time.value} units={time.units}/>}</Tag>
                    <Tag color='red'>{temperature && <Amount value={temperature.value} units={temperature.units}/>}</Tag>
                    {equipment && equipment.map(it => <Tag color='blue'>{it}</Tag>)}
                </div>
                <div className='w3-rest'>{description.split('.').map((it, index) => <p key={index}>{it}</p>)}</div>
            </div>
        </div>
    );
}

Step.propTypes = {
    ...StepShape,
    index: number.isRequired
}
