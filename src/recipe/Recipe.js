import React from "react";
import {RecipeShape} from "../PropTypeShapes";
import Ingredients from "./sidebar/Ingredients";
import './recipe.scss'
import EquipmentList from "./step/Step/EquipmentList";
import Step from "./step/Step/Step";

const Recipe = ({title, id, description, source, yields, steps, titleImage}) => {

    const equipment = Array.from(new Set(steps.filter(it => it && it.equipment)
        .flatMap(step => step.equipment).map(it => it.toLowerCase())))

    return <div>
        <div style={{position: 'sticky', top: 0, backgroundColor: 'white', display: "flex", justifyContent: 'space-between'}}>
            <h1>{title}</h1>
            {yields && <div style={{marginTop: '1em'}}>Yields: {yields}</div>}
        </div>
        <div style={{display: 'flex', flexWrap: 'wrap'}}>
            {titleImage && <img alt={title} src={titleImage} style={{maxWidth: '100%', maxHeight: '100%'}}/>}
            <div style={{padding: '1em'}}>
                {description && <p>{description}</p>}
                {equipment && <p><strong>Equipment</strong>: <EquipmentList equipment={equipment}/></p>}
                <a href={source}>Link to Source</a>
                <Ingredients ingredients={steps.flatMap(step => step.ingredients)
                    .filter(it => typeof it !== 'undefined' && typeof it.madeInStep === 'undefined')}/>
            </div>
        </div>
        <div>
            {steps.map((it, index) => <Step {...it} index={index}/>)}
        </div>
    </div>
}

Recipe.propTypes = RecipeShape

export default Recipe
