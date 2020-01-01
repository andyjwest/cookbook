import React from 'react'
import './recipe-card.scss'

export default function RecipeCard({title, source, yields, steps, serving, titleImage}) {
    return (
        <div className='recipe-card'>
            <div>
                <img src={titleImage} alt={title}/>
            </div>
            <h1>{title}</h1>
            <div>{yields}</div>
        </div>
    )
}

function Ingredient({name, amount, madeInStep}) {
    console.log(name)
    return (
        <div>{!!amount && `${amount.value} ${amount.units} `}{name}{!!madeInStep && <sup>{madeInStep}</sup>}</div>
    )
}