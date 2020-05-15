import React, {useState} from 'react';
import './recipe.scss';
import Sidebar from "./sidebar/Sidebar";
import Title from "./title/Title";
import Step from "./step/Step";
import StepContainer from "./step/StepContainer";
import {RecipeShape} from "../PropTypeShapes";

export default function Recipe({title, source, yields, steps, serving, id, titleImage, description}) {
    //Fixme Combine the same things (maybe based on config)
    const mainIngredients = steps.flatMap(step => step.ingredients)
        .filter(it => typeof it !== 'undefined' && typeof it.madeInStep ===
            'undefined');
    return (
        <div className='recipe'>
            <Sidebar titleImage={titleImage} description={description} steps={steps}/>
            <div className='content'>
                <Title title={title} />
                <div>{description}</div>
                {steps.map((step, index) => <Step key={index} {...step} />)}
            </div>
        </div>
    );
}

Recipe.propType = RecipeShape