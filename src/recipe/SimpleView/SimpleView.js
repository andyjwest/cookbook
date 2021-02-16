import React from "react";
import IngredientList from "../IngredientList";

const SimpleView = ({title, steps}) => {
    return <div className='w3-container'>
        <h1 style={{width: '100%', textAlign: 'center'}}>{title}</h1>
        <div style={{display: "flex", flexWrap: "wrap"}}>
            <div className='w3-container'>
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
