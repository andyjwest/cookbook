import React from "react";
import {RecipeShape} from "../PropTypeShapes";
import EquipmentList from "./step/Step/EquipmentList";
import Step from "./step/Step/Step";
import IngredientList from "./IngredientList";

const Recipe = ({title, id, description, source, yields, steps, titleImage}) => {

    const equipment = Array.from(new Set(steps.filter(it => it && it.equipment)
        .flatMap(step => step.equipment).map(it => it.toLowerCase())))

    return <div>
        <div style={{position: 'sticky', top: 0, backgroundColor: 'white', display: "flex", justifyContent: 'space-between'}}>
            <h1>{title}</h1>
            {yields && <div style={{marginTop: '1em'}}>Yields: {yields}</div>}
        </div>
        <div className='w3-container'>
            {titleImage && <div className='w3-half'>
                <img alt={title} src={titleImage} className='w3-round' style={{maxWidth: '100%', maxHeight: '100%'}}/>
                {equipment && <p><strong>Equipment</strong>: <EquipmentList equipment={equipment}/></p>}
            </div>}
            <div className='w3-container w3-half'>
                {description && <p className='w3-large'>{description}</p>}
                <a href={source}>Link to Source</a>
                <IngredientList ingredients={steps.flatMap(step => step.ingredients)
                    .filter(it => typeof it !== 'undefined' && typeof it.madeInStep === 'undefined')}/>
            </div>
        </div>
        {steps.map((it, index) => <Step {...it} index={index} key={index}/>)}
    </div>
}

Recipe.propTypes = RecipeShape

export default Recipe
