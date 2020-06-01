import React, {useState} from 'react';
import './recipe.scss';
import Title from "./title/Title";
import {RecipeShape} from "../PropTypeShapes";
import Step from "./step/Step/Step";
import {RecipeWelcomeContentPanel} from "./step/RecipeWelcomeContentPanel/RecipeWelcomeContentPanel";

export default function Recipe(props) {
    const {title, source, yields, steps, serving, id} = props
    const [activeStepIndex, setActiveStep] = useState(0)
    const mainIngredients = steps.flatMap(step => step.ingredients)
        .filter(it => typeof it !== 'undefined' && typeof it.madeInStep ===
            'undefined');
    return (
        <div className='recipe'>
            <Title title={title} stepCount={activeStepIndex} stepTitle={steps[activeStepIndex]}/>
            {activeStepIndex !== 0 && <button onClick={() => setActiveStep(activeStepIndex - 1)}>Prior Step</button>}
            <div className='content'>
                {activeStepIndex === 0 ?
                    <RecipeWelcomeContentPanel {...props} /> :
                    <Step {...steps[activeStepIndex - 1]} stepNumber={activeStepIndex}/>
                }
            </div>
            <button onClick={() => setActiveStep(activeStepIndex + 1)}>Next Step</button>
        </div>
    );
}

Recipe.propType = RecipeShape