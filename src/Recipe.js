import React from 'react'
import Step from './Step';


export default function Recipe({title, source, yields, steps, serving, titleImage}) {
    //Fixme Combine the same things (maybe based on config)
    const mainIngredients = steps.flatMap(step => step.ingredients)
        .filter(it => typeof it !== 'undefined' && typeof it.madeInStep === 'undefined');
    return (
        <div className='recipe'>
            <h1>{title}</h1>
            <img src={titleImage} alt={title}/>
            <div>{mainIngredients.map(ingredient => <Ingredient {...ingredient}/>)}</div>
            <div>{yields}</div>
            <div>{steps.map((step, index) => <Step key={index}{...step}/>)}</div>
        </div>
    )
}

function Ingredient({name, amount, madeInStep}) {
    console.log(name)
    return (
        <div>{!!amount && `${amount.value} ${amount.units} `}{name}{!!madeInStep && <sup>{madeInStep}</sup>}</div>
    )
}