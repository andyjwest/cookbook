import React from "react";
import IngredientList from "../IngredientList";
import Title from "../title/Title";

const SimpleView = ({title, steps, titleImage}) => {
    return <div className='w3-container'>
        <h1>{title}</h1>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className='w3-container'>
                <img src={titleImage} style={{maxWidth: '300px'}}/>
                <IngredientList ingredients={steps.flatMap(step => step.ingredients)
                    .filter(it => typeof it !== 'undefined' && typeof it.madeInStep === 'undefined')}/>
            </div>
            <div className='w3-container' style={{maxWidth: '500px'}}>
                {steps.map((it, index) => it.description.split('.').map((it, index) => <p key={index}>{it}</p>))}
            </div>
        </div>
    </div>
}

export default SimpleView
